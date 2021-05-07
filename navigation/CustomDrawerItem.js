import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const CustomDrawerItem = (props) => {
  const { focused, icon, label, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: focused ? "rgba(255,255,0,0.4)" : null },
      ]}
    >
      <FontAwesomeIcon icon={icon} size={16} color="black" />
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  text: {
    marginLeft: 30,
  },
});

export default CustomDrawerItem;
