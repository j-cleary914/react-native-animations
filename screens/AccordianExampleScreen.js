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
import Accordian from "../can-it-be-done-in-react-native/Accordian-orig/Accordian";

// import { Text, View } from "../components/Themed";

export default ({ navigation }) => {
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
    // justifyContent: "center",
  },
});
