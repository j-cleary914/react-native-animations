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
          focused={focusedRouteName === "screenOne" ? true : false}
          icon={["far", "bars"]}
          label="Screen One"
          onPress={() => {
            console.log(props.navigation.navigate("screenOne"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["far", "bars"]}
          label="Screen Two"
          onPress={() => {
            console.log(props.navigation.navigate("screenTwo"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fas", "th"]}
          label="Dashboard"
          onPress={() => {
            console.log(props.navigation.navigate("screenTwo"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fas", "th"]}
          label="Manage My Properties"
          onPress={() => {
            console.log(props.navigation.navigate("screenTwo"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fas", "user"]}
          label="Profile"
          onPress={() => {
            console.log(props.navigation.navigate("screenTwo"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "announcementsScreen" ? true : false}
          icon={["fas", "bell"]}
          label="Announcements"
          onPress={() => {
            console.log(props.navigation.navigate("announcementsScreen"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fas", "file"]}
          label="Documents"
          onPress={() => {
            console.log(props.navigation.navigate("screenTwo"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "generalInfoScreen" ? true : false}
          icon={["fas", "info-circle"]}
          label="General Information"
          onPress={() => {
            console.log(props.navigation.navigate("generalInfoScreen"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "legalInfoScreen" ? true : false}
          icon={["fas", "briefcase"]}
          label="Legal Information"
          onPress={() => {
            console.log(props.navigation.navigate("legalInfoScreen"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fal", "credit-card"]}
          label="Payments"
          onPress={() => {
            console.log(props.navigation.navigate("screenTwo"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "faqScreen" ? true : false}
          icon={["fas", "comments-alt"]}
          label="FAQ's"
          onPress={() => {
            console.log(props.navigation.navigate("faqScreen"));
          }}
        />
        <CustomDrawerItem
          focused={focusedRouteName === "screenTwo" ? true : false}
          icon={["fas", "sign-out"]}
          label="Logout"
          onPress={() => {
            console.log(props.navigation.navigate("screenTwo"));
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