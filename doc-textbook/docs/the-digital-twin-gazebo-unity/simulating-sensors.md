---
title: "Simulating Sensors: LiDAR, Depth Cameras & IMUs"
description: "Simulating LiDAR, RGB-D depth cameras, and IMUs in Gazebo and Unity to create high-quality perception pipelines for humanoid robots."
---

# Simulating Sensors — LiDAR, Depth Cameras & IMUs

A digital twin must see, sense, and feel the environment exactly like a real robot.

This chapter explains how to simulate:

- **LiDAR**  
- **Depth Cameras (RGB-D)**  
- **IMUs**  

These sensors are the foundation of:

- SLAM  
- Navigation  
- Obstacle avoidance  
- Pose estimation  

---

## LiDAR Simulation

```xml
<sensor name="laser" type="lidar">
  <range>
    <min>0.1</min>
    <max>30</max>
  </range>
  <horizontal>
    <samples>1080</samples>
    <resolution>1</resolution>
    <fov>3.14</fov>
  </horizontal>
</sensor>

```

## Depth Camera Simulation

Depth cameras provide:
- RGB image
- Depth image
- Point clouds

```xml
<sensor type="depth" name="depth_camera">
  <camera>
    <horizontal_fov>1.2</horizontal_fov>
  </camera>
</sensor>
```
Used for:
- Grasping
- Obstacle detection
- Scene understanding

```
## IMU Simulation
IMUs generate:
- Linear acceleration
- Angular velocity
- Orientation

```xml
<sensor name="imu" type="imu"/>

```
In humanoids, IMUs are critical for:
- Balance
- Gait control
- Fall detection