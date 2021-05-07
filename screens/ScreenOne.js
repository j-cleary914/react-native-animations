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

// import { Text, View } from "../components/Themed";

export default function ScreenOne({ navigation }) {
  const [loadingProgress, setLoadingProgress] = useState(new Animated.Value(0));
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    // console.log("hide splash screen");
    SplashScreen.hideAsync();
    Animated.timing(loadingProgress, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: true,
      delay: 0,
    }).start(() => {
      setAnimationDone(true);
    });
  }, []);

  const opacity = {
    opacity: loadingProgress.interpolate({
      inputRange: [0, 25, 50],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    }),
  };

  if (!animationDone) {
    return (
      <Animated.View
        style={[opacity, { backgroundColor: "red", flex: 1 }]}
      ></Animated.View>
    );
  }

  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
      <Animated.View style={styles.container}>
        <Text style={styles.title}>screen one init</Text>
        <FontText style={styles.title}>screen one init</FontText>
        <Button
          title="press me to go somewhere..."
          onPress={() => {
            console.log("boops you on the snoot");
            navigation.navigate("screenTwo");
          }}
        />
        <Button
          title="Run Again"
          onPress={() => {
            //it looks like the splash screen isnt actually working
            Updates.reloadAsync();
          }}
        />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </Animated.View>
    </SafeWitHeaderContentView>
  );

  return (
    <Animated.View style={[opacity, styles.container]}>
      <DefaultHeader />
      <Text style={styles.title}>screen one init</Text>
      <FontText style={styles.title}>screen one init</FontText>
      <Button
        title="press me to go somewhere..."
        onPress={() => {
          console.log("boops you on the snoot");
          navigation.navigate("screenTwo");
        }}
      />
      <Button
        title="Run Again"
        onPress={() => {
          //it looks like the splash screen isnt actually working
          Updates.reloadAsync();
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(243,243,243)",
    // justifyContent: "center",
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
