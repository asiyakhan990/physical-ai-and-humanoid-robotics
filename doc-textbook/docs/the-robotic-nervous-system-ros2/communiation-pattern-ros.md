---
title: "Communication Patterns in ROS 2"
description: "Exploring topics, services, and actions in ROS 2, and how robots use these communication patterns to process sensor data, execute commands, and run complex behaviors."
---

# Communication Patterns in ROS 2

Robots need multiple forms of communication:

- **Continuous streams** (camera → controller)  
- **One-time requests** (open gripper)  
- **Long-running actions** (walk 10m)  
- **Config updates** (update speed)  

ROS 2 supports all of these through its communication APIs.

---

## Topics (Pub/Sub)

Used for:

- Camera frames  
- IMU data  
- Joint states  
- Velocity commands  

Example:
/humanoid/joint_states
/cmd_vel
/camera/color


Publisher example:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class Brain(Node):
    def __init__(self):
        super().__init__("brain")
        self.pub = self.create_publisher(String, "thoughts", 10)

