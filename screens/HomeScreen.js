import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from "react-native";
import Svg, { Circle, G, Image as SvgImage } from "react-native-svg";
import StageInfoOverlayBloodSugarRises from "../components/StageInfoOverlay/bloodSugarRises";

import bloodSugarRisesImage from "../assets/images/fastingStages/bloodSugarRises.png";
import bloodSugarDropsImage from "../assets/images/fastingStages/bloodSugarDrops.png";
import bloodSugarNormalizesImage from "../assets/images/fastingStages/bloodSugarNormalises.png";
import fatBurningImage from "../assets/images/fastingStages/fatBurning.png";
import autophagyImage from "../assets/images/fastingStages/autophagy.png";
import growthHormonesImage from "../assets/images/fastingStages/growthHormones.png";


const HomeScreen = () => {
  const [fastingStatus, setFastingStatus] = useState("stopped");
  const [fastingTime, setFastingTime] = useState(0);
  const [circleProgress, setCircleProgress] = useState(0);
  const [fastingOption, setFastingOption] = useState("16/8");
  const [showInfoOverlay, setShowInfoOverlay] = useState(false);
  const [overlayTitle, setOverlayTitle] = useState("");
  const [overlayDescription, setOverlayDescription] = useState("");
  const [overlayImage, setOverlayImage] = useState("");

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
    const progress = (fastingTime / 16) * 100;
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

  const handleIconPress = (title, description, image) => {
    setOverlayTitle(title);
    setOverlayDescription(description);
    setOverlayImage(image);
    setShowInfoOverlay(true);
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
      <Svg height="350" width="300" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="40"
          stroke="#e0e0e0"
          strokeWidth="15"
          fill="none"
        />

        <G transform="rotate(-90, 50, 50)">
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke="#4caf50"
            strokeWidth="15"
            fill="none"
            strokeDasharray="251.2"
            strokeLinecap="round"
            strokeDashoffset={`${251.2 - (circleProgress / 100) * 251.2}`}
          />
        </G>

        <SvgImage // blood sugar rises
          onPress={() =>
            handleIconPress(
              "Blood Sugar Rises",
              "After eating, your blood sugar levels rise. This is because your body is breaking down the food you just ate.",
              bloodSugarRisesImage
            )
          }
          href={bloodSugarRisesImage}
          height="12"
          width="12"
          x={44}
          y={4}
        />

        <SvgImage // blood sugar drops (2hrs)
          onPress={() =>
            handleIconPress(
              "Blood Sugar Drops",
              "When you stop eating, your blood sugar levels drop. This is because your body is no longer breaking down the food you just ate.",
              bloodSugarDropsImage
            )
          }
          href={bloodSugarDropsImage}
          height="12"
          width="12"
          x={72.5}
          y={16}
        />

        <SvgImage // blood sugar normalizes (8hrs)
          onPress={() =>
            handleIconPress(
              "Blood Sugar Normalizes",
              "After 8 hours of fasting, your blood sugar levels normalize. This is because your body has used up all the glucose in your blood.",
              bloodSugarNormalizesImage
            )
          }
          href={bloodSugarNormalizesImage}
          height="12"
          width="12"
          x={44}
          y={84}
        />

        <SvgImage // fat burning (12hrs)
          onPress={() =>
            handleIconPress(
              "Fat Burning",
              "After 12 hours of fasting, your body starts to burn fat for energy. This is because your body has used up all the glucose in your blood.",
              fatBurningImage
            )
          }
          href={fatBurningImage}
          height="12"
          width="12"
          x={4}
          y={44}
        />

        <SvgImage // autophagy (14hrs)
          onPress={() =>
            handleIconPress(
              "Autophagy",
              "After 14 hours of fasting, autophagy begins. This is when your body starts to break down and recycle damaged cells.",
              autophagyImage
            )
          }
          href={autophagyImage}
          height="12"
          width="12"
          x={16}
          y={15.5}
        />

        <SvgImage // growth hormones increase (15hrs)
          onPress={() =>
            handleIconPress(
              "Growth Hormones Increase",
              "After 15 hours of fasting, growth hormones increase. This is when your body starts to repair and rebuild damaged cells.",
              growthHormonesImage
            )
          }
          href={growthHormonesImage}
          height="12"
          width="12"
          x={29}
          y={7}
        />
      </Svg>

      <Text style={styles.timerText}>{formatTime(fastingTime)}</Text>
      <Text style={styles.statusText}>{fastingStatus.toUpperCase()}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setFastingStatus(
              fastingStatus === "started" ? "stopped" : "started"
            )
          }
        >
          <Text style={styles.buttonText}>
            {fastingStatus === "started" ? "Stop" : "Start"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setFastingStatus("paused")}
        >
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
      </View>

      <StageInfoOverlayBloodSugarRises
        visible={showInfoOverlay}
        onClose={() => setShowInfoOverlay(false)}
        title={overlayTitle}
        description={overlayDescription}
        image={overlayImage}
      />
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

