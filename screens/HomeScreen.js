import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

const HomeScreen = () => {
  const [fastingStatus, setFastingStatus] = useState("stopped");

  const startFasting = () => {
    setFastingStatus("started");
    // Add logic to start the fasting timer
  };

  const pauseFasting = () => {
    setFastingStatus("paused");
    // Add logic to pause the fasting timer
  };

  const stopFasting = () => {
    setFastingStatus("stopped");
    // Add logic to stop the fasting timer
  };

  return (
    <View style={styles.container}>
      <Svg height="300" width="300" viewBox="0 0 100 100">
        <G>
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke="#e0e0e0"
            strokeWidth="20"
            fill="none"
          />
          {/* Update the strokeDasharray and strokeDashoffset based on the fasting progress */}
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke="#4caf50"
            strokeWidth="20"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset="0"
          />
        </G>
      </Svg>
      <Text style={styles.statusText}>{fastingStatus.toUpperCase()}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startFasting}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pauseFasting}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stopFasting}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#4caf50",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default HomeScreen;
