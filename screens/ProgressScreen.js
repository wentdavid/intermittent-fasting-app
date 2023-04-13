import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProgressScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Progress Screen!</Text>
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

export default ProgressScreen;
