import React, { useEffect, useState } from "react";
import {
  Button,
  Animated,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { FontText } from "../components/FontText";
import DefaultHeader from "../components/DefaultHeader";

import SafeWitHeaderContentView from "../components/Layout/SafeWitHeaderContentView";
import { HEADER_HEIGHT } from "../components/DefaultHeader";

export default () => {
  useEffect(() => {}, []);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const playCircleRadius = windowWidth / 3;

  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
      <Pressable
        style={({ pressed }) => [
          styles.screenContainer,
          { opacity: pressed ? 0.3 : 1 },
        ]}
      ></Pressable>
      <View
        style={[
          styles.playCircle,
          {
            width: playCircleRadius * 2,
            height: playCircleRadius * 2,
            borderRadius: playCircleRadius,
            left: windowWidth / 2 - playCircleRadius,
            top: windowHeight / 2 - playCircleRadius + HEADER_HEIGHT,
          },
        ]}
      ></View>
    </SafeWitHeaderContentView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(60,60,60)",
    // justifyContent: "center",
    // alignItems: "center",
    // position: "absolute",
  },
  playCircle: {
    backgroundColor: "pink",
    zIndex: 1,
    opacity: 1,
    position: "absolute",
  },
});
