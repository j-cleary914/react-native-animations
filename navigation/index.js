import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import React from "react";

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
