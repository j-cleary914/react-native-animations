import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import CustomDrawerItem from "./CustomDrawerItem";

export default DrawerContent = (props) => {
  //   console.log("yesyesyes");
  //   console.log(props);
  const { state } = props;
  const { routes, index } = state;
  const focusedRouteName = routes[index].name;
  //   console.log({ focusedRouteName });
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.headerContainer}>
          <Text>top section</Text>
        </View>
        <CustomDrawerItem
          focused={focusedRouteName === "accordianExample" ? true : false}
          icon={["far", "bars"]}
          label="Accordian Example"
          onPress={() => {
            props.navigation.navigate("accordianExample");
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "accordianMyVersion" ? true : false}
          icon={["far", "bars"]}
          label="My Accordian"
          onPress={() => {
            props.navigation.navigate("accordianMyVersion");
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "metronomePulse" ? true : false}
          icon={["fas", "music-alt"]}
          label="Metronome Pulse"
          onPress={() => {
            props.navigation.navigate("metronomePulse");
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fas", "th"]}
          label="to be coded..."
          onPress={() => {
            // console.log(props.navigation.navigate("screenTwo"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fas", "user"]}
          label="to be coded..."
          onPress={() => {
            // console.log(props.navigation.navigate("screenTwo"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "announcementsScreen" ? true : false}
          icon={["fas", "bell"]}
          label="to be coded..."
          onPress={() => {
            // console.log(props.navigation.navigate("announcementsScreen"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fas", "file"]}
          label="to be coded..."
          onPress={() => {
            // console.log(props.navigation.navigate("screenTwo"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "generalInfoScreen" ? true : false}
          icon={["fas", "info-circle"]}
          label="to be coded..."
          onPress={() => {
            // console.log(props.navigation.navigate("generalInfoScreen"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "legalInfoScreen" ? true : false}
          icon={["fas", "briefcase"]}
          label="to be coded..."
          onPress={() => {
            // console.log(props.navigation.navigate("legalInfoScreen"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fal", "credit-card"]}
          label="to be coded..."
          onPress={() => {
            // console.log(props.navigation.navigate("screenTwo"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "faqScreen" ? true : false}
          icon={["fas", "comments-alt"]}
          label="to be coded..."
          onPress={() => {
            // console.log(props.navigation.navigate("faqScreen"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fas", "sign-out"]}
          label="to be coded..."
          onPress={() => {
            // console.log(props.navigation.navigate("screenTwo"));
          }}
        />
      </DrawerContentScrollView>
      {/* <View style={styles.headerContainer}>
        <Text>bottom section</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 150,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
});
