import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import React from "react";
import NotFoundScreen from "../screens/NotFoundScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer
    // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {/* <RootNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

// export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
//     return (
//       <NavigationContainer
//         linking={LinkingConfiguration}
//         theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <RootNavigator />
//       </NavigationContainer>
//     );
//   }
