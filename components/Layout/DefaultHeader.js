import React, { useEffect } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useIsDrawerOpen } from "@react-navigation/drawer";

export const HEADER_HEIGHT = 50;

export default (props) => {
  const isDrawerOpen = useIsDrawerOpen();
  const navigation = useNavigation();

  //william candice code

  const mix = (value, x, y) => {
    "worklet";
    return x * (1 - value) + y * value;
  };
  const isToggled = useSharedValue(0);

  useEffect(() => {
    isToggled.value = isDrawerOpen ? 1 : 0;
  }, [isDrawerOpen]);

  const transition = useDerivedValue(() => {
    return withTiming(isToggled.value, { duration: 400 });
  });

  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: mix(transition.value, 0, 90) + "deg",
        },
      ],
    };
  });

  return (
    <View style={[styles.headerContainer, { height: HEADER_HEIGHT }]}>
      <View style={styles.headerLeft}>
        <Pressable
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Animated.View style={rotateStyle}>
            <FontAwesomeIcon icon={["far", "bars"]} size={22} color="black" />
          </Animated.View>
        </Pressable>
      </View>
      <View style={styles.headerRight}>
        <Text style={{ paddingHorizontal: 20, fontSize: 24 }}>test app</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: colors.statusBarColor,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  headerLeft: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "rgba(255,100,100, 0.1)",
  },
  headerRight: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "rgba(100,255,100, 0.3)",
  },
});
