import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import useCachedResources from "./hooks/useCachedResources";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars as farBars,
  faPlus as farPlus,
  faMinus as farMinus,
} from "@fortawesome/pro-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faComment,
  faTh,
  faUser,
  faBell,
  faFile,
  faInfoCircle,
  faBriefcase,
  faCommentsAlt,
  faSignOut,
} from "@fortawesome/pro-solid-svg-icons";
import { faCreditCard as falCreditCard } from "@fortawesome/pro-light-svg-icons";

library.add(
  farBars,
  faTwitter,
  faComment,
  faTh,
  faUser,
  faBell,
  faFile,
  faInfoCircle,
  faBriefcase,
  falCreditCard,
  faCommentsAlt,
  faSignOut,
  farPlus,
  farMinus
);

export default function App() {
  const [userToken, setUserToken] = useState(false);
  const isLoadingComplete = useCachedResources();

  // return (
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //     <ActivityIndicator size="large" color="red" />
  //   </View>
  // );

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <Navigation />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    // fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
