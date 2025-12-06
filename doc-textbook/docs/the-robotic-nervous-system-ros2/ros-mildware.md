---
title: "Understanding ROS 2 as Middleware"
description: "A deep dive into ROS 2 as the distributed middleware that enables real-time messaging, modular robot software, and multi-machine coordination in humanoid systems."
---

# Understanding ROS 2 as Middleware

## What is Middleware?
Middleware sits between applications and hardware, enabling communication.

Humanoid robots require middleware because:

- They contain many independent modules  
- Those modules must communicate quickly  
- The system must run across multiple computers  
- The robot must be fault-tolerant  

ROS 2 is middleware built on **DDS**, a real-time communication protocol used in autonomous drones, spacecraft, and autonomous vehicles.

---

## The ROS 2 Graph

ROS 2 organizes robot components into a computational graph:


### Core Elements

| Element | Purpose |
|--------|----------|
| **Node** | A running process (e.g., `camera_node`) |
| **Topic** | Continuous stream (pub/sub) |
| **Service** | Request/response |
| **Action** | Long-running task |
| **Parameter** | Dynamic configuration |
| **Launch Files** | Start multiple nodes |





