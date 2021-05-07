import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/Colors";
import DefaultHeader from "../DefaultHeader";

export default (props) => (
  <SafeAreaView
    style={{ flex: 1, backgroundColor: colors.statusBarColor }}
    edges={["right", "top", "left"]}
  >
    {props.children}
  </SafeAreaView>
);
