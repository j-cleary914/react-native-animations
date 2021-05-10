import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LIST_ITEM_HEIGHT = 74;

const InfoText = ({ infoText }) => {
  return (
    <View
      style={{
        backgroundColor: "pink",
        padding: 10,
        borderBottomWidth: 1,
        // borderColor: "#f4f4f6",
        height: LIST_ITEM_HEIGHT,
      }}
    >
      <Text style={{ fontSize: 16 }}>{infoText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pointsContainer: {
    borderRadius: 8,
    backgroundColor: "#44c282",
    padding: 8,
  },
  points: {
    color: "white",
    fontWeight: "bold",
  },
});

export default InfoText;
