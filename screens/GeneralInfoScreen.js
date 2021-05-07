import React, { ReactElement, ReactNode, RefObject, useRef } from "react";
import { StyleSheet, View, Text, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
import SafeWitHeaderContentView from "../components/Layout/SafeWitHeaderContentView";
import DefaultHeader from "../components/DefaultHeader";
import ExpandableInfoTest from "../components/UI/ExpandableInfoTest";
import FontText from "../components/FontText";

const sectionHeaderHeight = 40;

const data = [
  {
    title: "fake question 1 please fix me",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu leo, porta sit amet accumsan non, laoreet non nibh. Duis metus est, pharetra vitae turpis non, efficitur suscipit augue. Nulla ultricies leo id maximus ultricies. Donec consectetur dolor justo, eu pulvinar dolor aliquet euismod. Aenean tellus leo, ullamcorper sed dolor id, sollicitudin faucibus lectus. Nam enim ligula, malesuada eu odio in, hendrerit dictum libero. Aenean porta conse",
  },
  {
    title: "Does the walker choose the path or the path the walker?",
    text:
      "Nunc a sem et dolor mattis semper a sed augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque euismod vestibulum quam sit amet ullamcorper. Fusce nec arcu aliquet, sagittis metus et, ullamcorper ligula. Vivamus hendrerit, mau",
  },
  {
    title: "Not all who wander are lost",
    text:
      "Donec porttitor, nunc et aliquet tempor, nisi sapien lacinia nunc, at placerat augue justo sit amet tellus. Quisque id lorem in turpis pellentesque vestibulum. Nullam elit nunc, lobortis nec rutrum sed, iaculis aliquam felis. Nunc nec accumsan ante. Curabitur nulla neque, viverra a elit eu, faucibus sollicitudin mauris. Sed eget magna a purus cursus tincidunt eget vel diam. Nam augue augue, vehicula eget iacu",
  },
  {
    title: "code monkey wake up get coffee, codemonkey go to job",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu leo, porta sit amet accumsan non, laoreet non nibh. Duis metus est, pharetra vitae turpis non, efficitur suscipit augue. Nulla ultricies leo id maximus ultricies. Donec consectetur dolor justo, eu pulvinar dolor aliquet euismod. Aenean tellus leo, ullamcorper sed dolor id, sollicitudin faucibus lectus. Nam enim ligula, malesuada eu odio in, hendrerit dictum libero. Aenean porta conse",
  },
  {
    title: "exactly how much wood WOULD a woodchuck chuck?",
    text:
      "Nunc a sem et dolor mattis semper a sed augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque euismod vestibulum quam sit amet ullamcorper. Fusce nec arcu aliquet, sagittis metus et, ullamcorper ligula. Vivamus hendrerit, mau",
  },
  {
    title: "like sand through the hourglass, so are the days of our lives",
    text:
      "Donec porttitor, nunc et aliquet tempor, nisi sapien lacinia nunc, at placerat augue justo sit amet tellus. Quisque id lorem in turpis pellentesque vestibulum. Nullam elit nunc, lobortis nec rutrum sed, iaculis aliquam felis. Nunc nec accumsan ante. Curabitur nulla neque, viverra a elit eu, faucibus sollicitudin mauris. Sed eget magna a purus cursus tincidunt eget vel diam. Nam augue augue, vehicula eget iacu",
  },
];

function createSharedVariables() {
  const contentHeights = data.map(() => useSharedValue(0));

  const contentHeightsCopy = contentHeights;
  const result = [useSharedValue(0)];
  for (let i = 1; i < data.length; i++) {
    const previousHeight = result[i - 1];
    const previousContentHeight = contentHeightsCopy[i - 1];
    result.push(
      useDerivedValue(() => {
        return (
          previousHeight.value +
          previousContentHeight.value +
          sectionHeaderHeight +
          1
        );
      })
    );
  }
  const heights = result;
  const totalContentHeights = contentHeights.reduce(
    (a, b) => a.value + b.value,
    0
  );
  // const totalHeights = heights.reduce((a, b) => a + b, 0);

  return {
    contentHeights,
    heights,
    totalContentHeights,
    // totalHeights,
  };
}

const MeasureExample = () => {
  const {
    heights,
    contentHeights,
    totalHeights,
    totalContentHeights,
  } = createSharedVariables();

  console.log(totalContentHeights);

  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
      <ScrollView style={{}}>
        <View
          style={{
            padding: 20,
            height: 1000,
          }}
        >
          <View>
            <Text style={{ alignSelf: "center" }}>general oooooo</Text>
            {data.map((ele, i) => {
              return (
                <ExpandableInfoTest
                  title={ele.title}
                  key={i}
                  height={heights[i]}
                  contentHeight={contentHeights[i]}
                  z={i}
                  show={true}
                  infoText={data[i].text}
                >
                  <View collapsable={false} style={{ backgroundColor: "pink" }}>
                    <Text style={{ fontFamily: "space-mono" }}>
                      {data[i].text}
                    </Text>
                  </View>
                </ExpandableInfoTest>
              );
            })}
            <ExpandableInfoTest
              title={""}
              key={5}
              height={heights[5]}
              contentHeight={contentHeights[5]}
              z={5}
              show={false}
            >
              <View
                collapsable={false}
                style={{ height: 500, backgroundColor: "rgb(230,230,230)" }}
              />
            </ExpandableInfoTest>
          </View>
        </View>
      </ScrollView>
    </SafeWitHeaderContentView>
  );
};

const styles = StyleSheet.create({
  section: {
    position: "absolute",
    width: "100%",
  },
  sectionHeader: {
    backgroundColor: "azure",
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default MeasureExample;
