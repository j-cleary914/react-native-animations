import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import DefaultHeader from "../components/DefaultHeader";
import SafeWitHeaderContentView from "../components/Layout/SafeWitHeaderContentView";

// import { Text, View } from "../components/Themed";

function handleWebPress() {
  WebBrowser.openBrowserAsync("https://google.com");
}

export default function ScreenTwo() {
  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
      <View style={styles.container}>
        <Text style={styles.title}>screen two blud</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleWebPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              tap me to open a portal to the magical world of the internet...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeWitHeaderContentView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
