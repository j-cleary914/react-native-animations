import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AccordianScreenOne from "../screens/AccordianScreenOne";

import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

export default (props) => {
  // console.log("nonono");
  // console.log(props);
  return (
    <Drawer.Navigator
      initialRouteName="accordian"
      drawerType="front"
      drawerStyle={{
        backgroundColor: "rgba(255,255,255,1)",
        width: 240,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="accordianOne" component={AccordianScreenOne} />
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
