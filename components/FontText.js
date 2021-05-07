import React from "react";
import { Text } from "react-native";

export function FontText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]}>
      {props.children}
    </Text>
  );
}
