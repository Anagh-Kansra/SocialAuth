import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ActivityIndex = () => {
  return (
    <View style={styles.pageIndicator}>
      <View style={styles.activeIndicator} />
      <View style={styles.inactiveIndicator} />
      <View style={styles.inactiveIndicator} />
      <View style={styles.inactiveIndicator} />
    </View>
  );
};

export default ActivityIndex;

const styles = StyleSheet.create({
  pageIndicator: {
    flexDirection: "row",
    marginBottom: 30,
    padding: 5,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "white",
    zIndex: 1,
    backgroundColor: 'grey',
  },
  activeIndicator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "white",
    marginHorizontal: 2,
  },
  inactiveIndicator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 2,
  },
});
