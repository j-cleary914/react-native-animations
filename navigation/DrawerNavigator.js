import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AccordianExampleScreen from "../screens/AccordianExampleScreen";
import AccordianMyVersionScreen from "../screens/AccordianMyVersionScreen";

import DrawerContent from "./DrawerContent";
import MetronomePulseScreen from "../screens/MetronomePulseScreen";
import CustomDrawerScreen from "../screens/CustomDrawerScreen";

const Drawer = createDrawerNavigator();

export default (props) => {
  return (
    <Drawer.Navigator
      initialRouteName="customDrawer"
      drawerType="front"
      drawerStyle={{
        backgroundColor: "rgba(255,255,255,1)",
        width: 240,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="accordianExample"
        component={AccordianExampleScreen}
      />
      <Drawer.Screen
        name="accordianMyVersion"
        component={AccordianMyVersionScreen}
      />
      <Drawer.Screen name="metronomePulse" component={MetronomePulseScreen} />
      <Drawer.Screen name="customDrawer" component={CustomDrawerScreen} />
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
