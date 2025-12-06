---
title: "Isaac ROS: GPU-Accelerated Perception & VSLAM"
description: "Using NVIDIA Isaac ROS to accelerate vision, depth processing, stereo perception, and VSLAM pipelines on GPUs and Jetson systems."
---

# Isaac ROS — GPU-Accelerated Perception & VSLAM

Isaac ROS provides high-performance, GPU-accelerated ROS 2 packages optimized for:

- Perception  
- VSLAM  
- Depth processing  
- Stereo cameras  
- Navigation inputs  
- Visual odometry  

These pipelines run efficiently on:

- NVIDIA Jetson AGX Orin  
- NVIDIA Jetson Orin Nano / NX  
- Desktop RTX GPUs  

---

## What Isaac ROS Provides

Isaac ROS includes prebuilt ROS 2 nodes for:

- Stereo image alignment  
- Optical flow  
- Depth estimation  
- AprilTag detection  
- Visual SLAM  
- Image segmentation  
- Object detection (TensorRT accelerated)  

These replace slow CPU pipelines with GPU-accelerated versions.

---

## Visual SLAM (VSLAM)

Visual SLAM allows humanoids to:

- Build a map of the environment  
- Track their position  
- Understand 3D layout  
- Combine IMU + camera data  

Isaac ROS VSLAM uses:

- Stereo + IMU fusion  
- GPU-accelerated feature tracking  
- Keyframe mapping  

This gives humanoids real-time 3D awareness.

---

## ROS 2 Integration

Example launch snippet:

```xml
<node
  pkg="isaac_ros_visual_slam"
  exec="visual_slam_node"
  name="vslam"/>
