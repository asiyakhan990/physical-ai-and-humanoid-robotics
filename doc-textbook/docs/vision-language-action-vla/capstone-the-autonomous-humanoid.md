---
title: "Capstone Project: The Autonomous Humanoid"
description: "A complete end-to-end project combining voice commands, vision, LLM planning, SLAM, navigation, and manipulation to build a fully autonomous humanoid in simulation."
---

# Capstone Project — The Autonomous Humanoid

This final project synthesizes everything learned in the course.  
You will build a simulated humanoid robot that can:

- Receive a **voice command**  
- Convert it into structured actions via an **LLM**  
- Perceive its environment using **vision**  
- Localize itself with **VSLAM**  
- Navigate with **Nav2**  
- Identify a target object  
- Manipulate the object  

All inside Isaac Sim or Gazebo.

---

## Project Pipeline Overview

---

## Step 1: Voice Command

Whisper receives input:

- “Pick up the blue bottle and place it on the shelf.”

---

## Step 2: Cognitive Planning

LLM produces a JSON plan:

```json
{
  "task": "pick_and_place",
  "steps": [
    "navigate_to_table",
    "detect_blue_bottle",
    "grasp_object",
    "navigate_to_shelf",
    "place_object"
  ]
}

```
### Step 3: Perception
Use:
- RGB-D camera
- Segmentation
- 3D bounding boxes
- Robot identifies the bottle in Isaac Sim.

### Step 4: Navigation
Nav2 computes a path avoiding:
- Obstacles
- Furniture
- Dynamic objects

### Step 5: Manipulation
The robot performs:
- IK solving
- Reach planning
- Stable grasping
- Placement


