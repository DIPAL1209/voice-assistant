import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function VoiceAssistant() {
  const [spokenText, setSpokenText] = useState("");
  const [reply, setReply] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setSpokenText(text);
      generateReply(text);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const generateReply = (text: string) => {
    let response = "";

    if (text.toLowerCase().includes("hello")) {
      response = "Hey there! How are you?";
    } else if (text.toLowerCase().includes("time")) {
      response = `The time is ${new Date().toLocaleTimeString()}`;
    } else {
      response = "I heard you, but I'm still learning!";
    }

    setReply(response);
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(response);
    synth.speak(utter);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎙️ Voice Assistant (Web)</Text>

      <TouchableOpacity style={styles.button} onPress={startListening}>
        <Text style={styles.buttonText}>
          {isListening ? "Listening..." : "Start Listening"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>You said:</Text>
      <Text style={styles.text}>{spokenText || "..."}</Text>

      <Text style={styles.label}>Assistant says:</Text>
      <Text style={styles.text}>{reply || "Waiting for input..."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "#007AFF", padding: 15, borderRadius: 10 },
  buttonText: { color: "#fff", fontSize: 18 },
  label: { marginTop: 20, fontSize: 16, fontWeight: "600" },
  text: { fontSize: 18, color: "#333", marginTop: 5, textAlign: "center", paddingHorizontal: 20 },
});
