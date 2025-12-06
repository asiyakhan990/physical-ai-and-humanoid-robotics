---
title: "Voice-to-Action with Whisper"
description: "Using OpenAI Whisper to convert real-time speech into commands, enabling natural human-robot voice interaction and multimodal control."
---

# Voice-to-Action with Whisper

Robots must communicate with humans naturally.  
Voice is the most intuitive interface—and OpenAI Whisper provides state-of-the-art speech recognition for robotics.

In this chapter, you’ll integrate Whisper into a ROS 2 pipeline to allow humanoid robots to receive verbal instructions.

---

## Why Voice Matters for Humanoids

Voice interaction enables robots to:

- Follow natural-language commands  
- Assist humans hands-free  
- Operate in dynamic environments  
- Communicate with non-technical users  

Examples:

- "Walk to the kitchen."  
- "Pick up the bottle."  
- "Follow me."  
- "Scan the room."  

---

## Whisper Models

Whisper supports:

- Real-time transcription  
- Multilingual recognition  
- Noise robustness  
- Segment timestamps  
- Streaming inference (for robotics)  

---

### Whisper Node Example

```python
import subprocess

def transcribe_audio():
    output = subprocess.check_output([
        "whisper", "input.wav", "--model", "base", "--language", "en"
    ])
    return output

