import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBackground}>
        <LinearGradient
          colors={["#F7B174", "#F3A8CE"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.gradient, { width: `${progress}%` }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  progressBackground: {
    width: "100%",
    height: 5,
    backgroundColor: "#E6E6E6",
    borderRadius: 2.5,
    overflow: "hidden",
  },
  gradient: {
    height: "100%",
    borderRadius: 10,
  },
});

export default ProgressBar;
