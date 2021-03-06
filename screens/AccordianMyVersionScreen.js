import React, { useEffect, useState } from "react";
import {
  Button,
  Animated,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { FontText } from "../components/FontText";
import * as Updates from "expo-updates";
import * as SplashScreen from "expo-splash-screen";
import DefaultHeader from "../components/Layout/DefaultHeader";

import { SafeAreaView } from "react-native-safe-area-context";
import SafeWitHeaderContentView from "../components/Layout/SafeWitHeaderContentView";
import Accordian from "../components/Accordian/Accordian";

export default () => {
  useEffect(() => {}, []);

  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
      <Accordian />
    </SafeWitHeaderContentView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(243,243,243)",
  },
});
