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
import DefaultHeader from "../components/DefaultHeader";

import { SafeAreaView } from "react-native-safe-area-context";
import SafeWitHeaderContentView from "../components/Layout/SafeWitHeaderContentView";
import Accordian from "../components/Accordian/Accordian";

// import { Text, View } from "../components/Themed";

export default ({ navigation }) => {
  useEffect(() => {}, []);

  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
      <Accordian />
    </SafeWitHeaderContentView>
  );

  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
      <View style={styles.container}>
        <Text>hi</Text>
      </View>
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
