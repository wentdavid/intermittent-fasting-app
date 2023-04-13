import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Svg, { Circle, G, Image as SvgImage } from "react-native-svg";

const HomeScreen = () => {
  const [fastingStatus, setFastingStatus] = useState("stopped");
  const [fastingTime, setFastingTime] = useState(0);
  const [circleProgress, setCircleProgress] = useState(0);
  const [fastingOption, setFastingOption] = useState("16/8");

  useEffect(() => {
    let timer;
    if (fastingStatus === "started") {
      timer = setInterval(() => {
        setFastingTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (fastingStatus === "paused") {
      clearInterval(timer);
    } else {
      setFastingTime(0);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [fastingStatus]);

  useEffect(() => {
    const progress = (fastingTime / 5) * 100;
    setCircleProgress(progress > 100 ? 100 : progress);
  }, [fastingTime]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.optionText}>Fasting Option: {fastingOption}</Text>
      <TouchableOpacity onPress={() => setFastingOption("14/10")}>
        <Text>14/10</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFastingOption("16/8")}>
        <Text>16/8</Text>
      </TouchableOpacity>
      <Svg height="300" width="300" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="40"
          stroke="#e0e0e0"
          strokeWidth="20"
          fill="none"
        />
        
        <Circle
          cx="50"
          cy="50"
          r="40"
          stroke="#4caf50"
          strokeWidth="20"
          fill="none"
          strokeDasharray="251.2"
          strokeLinecap="round"
          strokeDashoffset={`${251.2 - (circleProgress / 100) * 251.2}`}
        />

        <SvgImage
          href={require("../assets/checkmark.png")}
          height="24"
          width="24"
          x={60}
          y={5}
        />

        <SvgImage
          href={require("../assets/checkmark.png")}
          height="24"
          width="24"
          x={60}
          y={71}
        />

        <SvgImage
          href={require("../assets/checkmark.png")}
          height="24"
          width="24"
          x={3}
          y={57}
        />
      </Svg>

      <Text style={styles.timerText}>{formatTime(fastingTime)}</Text>
      <Text style={styles.statusText}>{fastingStatus.toUpperCase()}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setFastingStatus("started")}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setFastingStatus("paused")}
        >
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setFastingStatus("stopped")}
        >
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
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timerText: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
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
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;