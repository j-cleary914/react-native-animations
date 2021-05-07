import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Colors from "../constants/Colors";

export default (props) => {
  const { backgroundColor, radius, icon, style, onPress } = props;

  return (
    <Pressable
      onPress={() => {
        console.log("boop");
        onPress();
      }}
      style={({ pressed }) => [
        {
          // backgroundColor: pressed ? "white" : backgroundColor,
          backgroundColor: Colors.darkAccent,
          height: radius * 2,
          width: radius * 2,
          borderRadius: radius,
        },
        styles.container,
        style,
      ]}
    >
      {({ pressed }) => (
        <FontAwesomeIcon icon={icon} size={pressed ? 10 : 20} color="white" />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
