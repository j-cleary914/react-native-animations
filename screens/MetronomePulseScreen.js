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
  const [tapTimestamps, setTapTimestamps] = useState([]);
  const [beatsInBar, setBeatsInBar] = useState(4);

  useEffect(() => {}, []);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const playCircleRadius = windowWidth / 3;

  const handleSetBpmTap = () => {
    setTapTimestamps([...tapTimestamps, Date.now()]);
  };

  const handleStart = () => {
    console.log(":3");
  };

  const calculateBPM = () => {
    if (tapTimestamps.length < beatsInBar) {
      return null;
    } else {
      const mostRecentBar = tapTimestamps.slice(
        tapTimestamps.length - beatsInBar
      );
      const dif1 = mostRecentBar[1] - mostRecentBar[0];
      const dif2 = mostRecentBar[2] - mostRecentBar[1];
      const dif3 = mostRecentBar[3] - mostRecentBar[2];
      const avgDifInMilliseconds = (dif1 + dif2 + dif3) / 3000; //only works for 4 beats per bar
      const bpm = 60 / avgDifInMilliseconds;
      return bpm;
    }
  };

  const BPM = calculateBPM();

  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
      <Pressable
        onPress={() => {
          handleSetBpmTap();
        }}
        style={({ pressed }) => [
          styles.screenContainer,
          { opacity: pressed ? 0.3 : 1 },
        ]}
      ></Pressable>
      <Pressable
        onPress={() => {
          handleStart();
        }}
        style={({ pressed }) => [
          styles.playCircle,
          {
            width: playCircleRadius * 2,
            height: playCircleRadius * 2,
            borderRadius: playCircleRadius,
            left: windowWidth / 2 - playCircleRadius,
            top: windowHeight / 2 - playCircleRadius + HEADER_HEIGHT,
            backgroundColor: pressed ? "orange" : "pink",
          },
        ]}
      >
        <Text>{BPM}</Text>
      </Pressable>
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
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
