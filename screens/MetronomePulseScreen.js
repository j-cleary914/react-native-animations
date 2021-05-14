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
import DefaultHeader from "../components/DefaultHeader";

import { SafeAreaView } from "react-native-safe-area-context";
import SafeWitHeaderContentView from "../components/Layout/SafeWitHeaderContentView";

export default () => {
  useEffect(() => {}, []);

  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
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
