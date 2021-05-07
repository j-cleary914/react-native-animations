import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect } from "react";
import { View, StyleSheet, Pressable, Platform, Button } from "react-native";
import Colors from "../../constants/Colors";
import { FontText } from "../FontText";
import Animated, {
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
  measure,
} from "react-native-reanimated";

export default (props) => {
  const { data, handlePress, index, openIndex } = props;
  /*
    openIndex is null when nothing is open 

  */
  //   const open = openIndex === index ? true : false;
  const open = true;

  useEffect(() => {
    isToggled.value = open ? 1 : 0;
  }, [open]);

  const title = data.title;
  const infoText = data.text;

  //animation city
  const measuredHeight = useSharedValue(0);
  const growingViewRef = useAnimatedRef();
  const isToggled = useSharedValue(0);

  const mix = (value, x, y) => {
    "worklet";
    return x * (1 - value) + y * value;
  };

  const transition = useDerivedValue(() => {
    return withSpring(isToggled.value, { overshootClamping: true });
    // return withTiming(isToggled.value, { duration: 200 });
  });

  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: mix(transition.value, 90, 180) + "deg",
        },
      ],
    };
  });

  // now lets try to grow the view showing the text

  const growStyle = useAnimatedStyle(() => {
    /*
    TODO - get the height of the text dynamically instead of just expanding 300 every time
    */
    return {
      height: mix(transition.value, 0, 150),
      //   height: 50,
      // height: 1 + transition.value * growTo,
      // height: 1 + transition.value + 200,
    };
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.headerContainer}
        onPress={() => {
          // console.log("press");
          handlePress(index);
          if (measuredHeight.value === 0) {
            //on press if the view is collapsed measuredHeight.value = 0
            runOnUI(() => {
              "worklet";
              console.log(
                Platform.OS +
                  "- (UI Thread) measured height of text field is " +
                  measure(growingViewRef).height
              );
              measuredHeight.value = measure(growingViewRef).height;
            })();
          }
        }}
      >
        <View style={styles.headerLeft}>
          <FontAwesomeIcon
            icon={["far", "minus"]}
            size={16}
            color="white"
            style={{ position: "absolute" }}
          />
          <Animated.View style={rotateStyle}>
            <FontAwesomeIcon icon={["far", "minus"]} size={16} color="white" />
          </Animated.View>
        </View>

        <View style={styles.headerRight}>
          <FontText style={styles.titleText}>{title}</FontText>
        </View>
      </Pressable>
      <Animated.View style={[styles.infoContainer, growStyle]}>
        {/* {open ? <FontText style={styles.infoText}>{infoText}</FontText> : null} */}
        <View ref={growingViewRef}>
          <FontText style={styles.infoText}>{infoText}</FontText>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 5,
    // borderRadius: 10,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: Colors.lightAccent,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  headerLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRight: {
    flex: 10,
    justifyContent: "center",
  },
  titleText: {
    color: "white",
    marginVertical: 5,
  },
  infoContainer: {
    width: "100%",
    backgroundColor: "rgb(230,230,230)",
    // padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // overflow: "hidden",
  },
  infoText: {
    fontSize: 12,
    // padding: 10,
    // overflow: "hidden",
  },
});
