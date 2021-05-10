import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  useAnimatedRef,
  measure,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
  runOnUI,
} from "react-native-reanimated";

import Chevron from "./Chevron";
// import Item, { ListItem } from "./ListItem";
import Item from "./ListItem";
import InfoText from "./InfoText";

// export interface List {
//   name: string;
//   items: ListItem[];
// }

// interface ListProps {
//   list: List;
// }

const List = ({ list, data }) => {
  const title = data.title.slice(0, 20);
  const infoText = data.text;

  const aref = useAnimatedRef();
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withSpring(1, { overshootClamping: true }) : withTiming(0)
  );
  const height = useSharedValue(0);
  const headerStyle = useAnimatedStyle(() => ({
    borderBottomLeftRadius: progress.value === 0 ? 8 : 0,
    borderBottomRightRadius: progress.value === 0 ? 8 : 0,
  }));
  const style = useAnimatedStyle(() => ({
    height: height.value * progress.value + 1,
    opacity: progress.value === 0 ? 0 : 1,
    // opacity: 1,
  }));
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          if (height.value === 0) {
            runOnUI(() => {
              "worklet";
              height.value = measure(aref).height;
            })();
          }
          open.value = !open.value;
        }}
      >
        <Animated.View style={[styles.container, headerStyle]}>
          <Text style={styles.title}>{title}</Text>
          <Chevron {...{ progress }} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, style]}>
        <View
          style={{
            backgroundColor: "pink",
            height: 10000,
            /*
              the measure function cannot measure the height of the text correctly until the text has rendeded
              to avoid cutting off any text we must supply this view with a height larger than the height of the text
              10000 is larger than any text *should* be in height, (roughly 10x the height of a large phone screen)
              the view should not grow past the actual height of the text as the actual height gets computed on the press         
            */
          }}
        >
          <Text
            style={{ fontSize: 16 }}
            ref={aref}
            onLayout={(e) => {
              console.log(e.nativeEvent.layout);
            }}
          >
            {infoText}
          </Text>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  items: {
    overflow: "hidden",
  },
});

export default List;
