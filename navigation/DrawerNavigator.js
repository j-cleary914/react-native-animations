import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";
import FAQScreen from "../screens/FAQScreen";

import DrawerContent from "./DrawerContent";
import LegalInformationScreen from "../screens/LegalInformationScreen";
import GeneralInfoScreen from "../screens/GeneralInfoScreen";
import AnnouncementsScreen from "../screens/AnnouncementsScreen";

const Drawer = createDrawerNavigator();

export default (props) => {
  // console.log("nonono");
  // console.log(props);
  return (
    <Drawer.Navigator
      initialRouteName="faqScreen"
      drawerType="front"
      drawerStyle={{
        backgroundColor: "rgba(255,255,255,1)",
        width: 240,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="screenOne" component={ScreenOne} />
      <Drawer.Screen name="screenTwo" component={ScreenTwo} />
      <Drawer.Screen name="faqScreen" component={FAQScreen} />
      <Drawer.Screen
        name="legalInfoScreen"
        component={LegalInformationScreen}
      />
      <Drawer.Screen name="generalInfoScreen" component={GeneralInfoScreen} />
      <Drawer.Screen
        name="announcementsScreen"
        component={AnnouncementsScreen}
      />
    </Drawer.Navigator>
  );
};

// const GodStack = createStackNavigator();

// export default function GodStackScreen() {
//   console.log("navigation!!");

//   // SplashScreen.hideAsync();
//   return (
//     <GodStack.Navigator initialRouteName="screenOne">
//       <GodStack.Screen
//         name="screenOne"
//         component={ScreenOne}
//         options={{ headerShown: false }}
//         // options={{ headerTitle: (props) => <DefaultHeader {...props} /> }}
//       />
//       <GodStack.Screen
//         name="screenTwo"
//         component={ScreenTwo}
//         options={{ headerShown: true }}
//       />
//     </GodStack.Navigator>
//   );
// }
