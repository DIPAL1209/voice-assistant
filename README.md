# 🎙️ Voice Assistant App

A simple React Native (Expo) app that demonstrates **voice wake-up** and **voice-based input**.  
The app listens for a wake phrase (“Hey Assistant”) and then records your next voice command, displaying it as text on the screen.

---

## Features
- Wake word detection using simple speech recognition trigger.
- Captures user voice command and converts it to text.
- Displays the recognized text in real time.
- Shows visual states (Idle → Listening → Result).
- Works on Android emulator or real device via Expo Go.

---

## Setup Instructions

## 1️ Prerequisites
- Node.js (v18 or above)
- npm (v9 or above)
- Expo CLI (`npx expo`)
- Android emulator or Expo Go app (for real device testing)

## 2️ Steps to Run

git clone https://github.com/DIPAL1209/voice-assistant.git
cd voice-assistant
npm install
npx expo start

## 3️ Permissions

When you open the app for the first time:
-- Allow Microphone Access for speech recognition.

## 4 How It Works
The app starts in Idle mode.
When you tap “Start Listening”, it enters Listening mode.
It recognizes speech and displays the text result.
On completion, you can tap again to restart listening.

## 5 Libraries Used
Library	Purpose
expo-speech	For speech features
expo-av	Audio control and playback
react-native-voice	Speech-to-text recognition
expo-permissions	Requesting mic access

## 6 Notes
This project uses React Native with Expo.
Developed in JavaScript.
Designed for clarity, not complexity.

## 7 Author
Dipal Patel
Date: October 30, 2025
Email:dipalpatel1209@gmail.com
