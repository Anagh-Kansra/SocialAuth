import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import Images from "@/utils/Images";

const SelectOptions = (props) => {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={props.onSelect}>
      {props.isSelected ? (
        <View>
          <View style={styles.textureContainer}>
            <Image source={Images.Texture} style={styles.textureImage} />
          </View>
          <LinearGradient
            colors={["#F7B174", "#F3A8CE"]}
            start={[0, 0]}
            end={[1, 0]}
            style={[styles.gradient, { width: props.width }]}
          >
            <Text style={styles.optionText}>{props.text}</Text>
            <FontAwesome
              name="check"
              size={14}
              color="white"
              style={styles.tickIcon}
            />
          </LinearGradient>
        </View>
      ) : (
        <View style={[styles.notSelected, { width: props.width }]}>
          <Text style={[styles.optionText, { color: "#000" }]}>
            {props.text}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SelectOptions;

const styles = StyleSheet.create({
  optionContainer: {
    marginVertical: 5,
    alignItems: "center",
  },
  textureContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    borderRadius: 30,
    overflow: "hidden",
  },
  textureImage: {
    width: "100%",
    height: "100%",
    opacity: 0.07,
  },
  gradient: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 0,
  },
  notSelected: {
    backgroundColor: "#F4F6F7",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  optionText: {
    fontSize: 14,
    color: "white",
    textAlign: "left",
  },
  tickIcon: {
    marginLeft: 10,
  },
});
