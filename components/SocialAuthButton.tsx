import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SocialAuthButton = (props) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: props.color,
          flexDirection: "row",
          justifyContent: "center",
        },
      ]}
      onPress={props.onPress}
    >
      <AntDesign
        name={props.icon}
        size={16}
        color={props.textColor}
        style={styles.icon}
      />
      <Text style={[styles.buttonText, { color: props.textColor }]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});

export default SocialAuthButton;
