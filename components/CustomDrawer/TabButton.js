import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default ({ currentTab, handleTabButtonPress, title, icon }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "Log Out") {
          // Do your Stuff...
        } else {
          handleTabButtonPress(title);
        }
      }}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: currentTab == title ? "white" : "transparent" },
        ]}
      >
        {icon}
        <Text
          style={[
            styles.text,
            { color: currentTab == title ? "#5359D1" : "white" },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 13,
    paddingRight: 35,
    borderRadius: 8,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 15,
  },
});
