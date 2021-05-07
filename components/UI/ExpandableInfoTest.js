import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect } from "react";
import { View, StyleSheet, Pressable, Platform, Button } from "react-native";
import Colors from "../../constants/Colors";
import { FontText } from "../FontText";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  measure,
  withTiming,
  Easing,
  useDerivedValue,
  useAnimatedRef,
} from "react-native-reanimated";
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const sectionHeaderHeight = 40;

const ExpandableInfoTest = (props) => {
  // type SectionProps = {
  //   title: string;
  //   height: Animated.SharedValue<number>;
  //   contentHeight: Animated.SharedValue<number>;
  //   z: number;
  //   show: boolean;
  // };
  const { title, children, height, contentHeight, z, show } = props;

  const aref = useAnimatedRef();

  const stylez = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: height.value }],
    };
  });
  const applyMeasure = ({ height }) => {
    "worklet";
    if (contentHeight.value === 0) {
      contentHeight.value = withTiming(height, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    } else {
      contentHeight.value = withTiming(0, {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    }
  };

  const onActiveImpl = () => {
    "worklet";
    applyMeasure(measure(aref));
  };

  const handler = useAnimatedGestureHandler({
    onActive: onActiveImpl,
  });

  return (
    <Animated.View style={[styles.section, stylez, { zIndex: z }]}>
      <View style={styles.headerContainer}>
        {show && (
          <TapGestureHandler onHandlerStateChange={handler}>
            <Animated.View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                // borderRadius: 10,
              }}
            >
              <View style={styles.headerLeft}>
                <FontAwesomeIcon
                  icon={["far", "minus"]}
                  size={16}
                  color="white"
                  style={{ position: "absolute" }}
                />
              </View>
              <View style={styles.headerRight}>
                <FontText style={{ color: "white" }}>{title}</FontText>
              </View>
            </Animated.View>
          </TapGestureHandler>
        )}
      </View>
      {/* </View> */}

      {
        /*
          using React.cloneElement is clunkier than props.children
          but is required here for animations to attach properly like this
          */
        React.Children.map(children, (element) =>
          React.cloneElement(element, { ref: aref })
        )
      }
    </Animated.View>
  );
};

export default ExpandableInfoTest;

const styles = StyleSheet.create({
  section: {
    position: "absolute",
    width: "100%",
  },
  headerContainer: {
    backgroundColor: Colors.lightAccent,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: sectionHeaderHeight + 1,
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
});
