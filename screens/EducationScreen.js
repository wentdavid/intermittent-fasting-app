import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EducationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Education Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EducationScreen;
