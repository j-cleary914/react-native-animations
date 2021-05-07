import React, { ReactElement, ReactNode, RefObject, useRef } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
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

const labels = ["apple", "banana", "kiwi", "milk", "water"];
const sectionHeaderHeight = 40;

const indices = [0, 1, 2, 3, 4, 5];

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
  const contentHeights = indices.map(() => useSharedValue(0));

  const contentHeightsCopy = contentHeights;
  const result = [useSharedValue(0)];
  for (let i = 1; i < indices.length; i++) {
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

  return {
    contentHeights,
    heights,
  };
}

const MeasureExample = () => {
  const { heights, contentHeights } = createSharedVariables();

  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
      <Text style={{ alignSelf: "center" }}>legal info</Text>
      <View style={{ margin: 10 }}>
        {data.map((ele, i) => {
          return (
            <Section
              title={ele.title.slice(0, 20)}
              key={i}
              height={heights[i]}
              contentHeight={contentHeights[i]}
              z={i}
              show={true}
            >
              <View collapsable={false} style={{ backgroundColor: "pink" }}>
                <Text>{data[i].text}</Text>
              </View>
            </Section>
          );
        })}
        <Section
          title={""}
          key={5}
          height={heights[5]}
          contentHeight={contentHeights[5]}
          z={5}
          show={false}
        >
          <View
            collapsable={false}
            style={{ height: 500, backgroundColor: "white" }}
          />
        </Section>
      </View>
    </SafeWitHeaderContentView>
  );
};

// type SectionProps = {
//   title: string;
//   height: Animated.SharedValue<number>;
//   contentHeight: Animated.SharedValue<number>;
//   z: number;
//   show: boolean;
// };

const Section = ({ title, children, height, contentHeight, z, show }) => {
  const aref = useAnimatedRef();

  const stylez = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: height.value }],
    };
  });

  return (
    <Animated.View style={[styles.section, stylez, { zIndex: z }]}>
      <SectionHeader
        title={title}
        animatedRef={aref}
        contentHeight={contentHeight}
        show={show}
      />
      <View>
        {React.Children.map(children, (element) =>
          React.cloneElement(element, { ref: aref })
        )}
      </View>
    </Animated.View>
  );
};

// type MeasuredDimensions = {
//   x: number;
//   y: number;
//   width: number;
//   height: number;
//   pageX: number;
//   pageY: number;
// };
const asyncMeasure = (animatedRef) => {
  return new Promise((resolve, reject) => {
    if (animatedRef && animatedRef.current) {
      animatedRef.current.measure?.((x, y, width, height, pageX, pageY) => {
        resolve({ x, y, width, height, pageX, pageY });
      });
    } else {
      reject(new Error("measure: animated ref not ready"));
    }
  });
};

// type SectionHeaderProps = {
//   title: string;
//   animatedRef: RefObject<React.Component>;
//   contentHeight: Animated.SharedValue<number>;
//   show: boolean;
// };

const SectionHeader = ({ title, animatedRef, contentHeight, show }) => {
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

  let onActiveImpl;
  if (Platform.OS === "web") {
    onActiveImpl = async () => {
      try {
        applyMeasure(await asyncMeasure(animatedRef));
      } catch (e) {
        console.log(e);
        throw new Error("measure failed: " + e);
      }
    };
  } else {
    onActiveImpl = () => {
      "worklet";
      applyMeasure(measure(animatedRef));
    };
  }

  const handler = useAnimatedGestureHandler({
    onActive: onActiveImpl,
  });

  return (
    <View style={styles.sectionHeader}>
      <View
        style={{
          height: sectionHeaderHeight,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>{title}</Text>
        {show && (
          <TapGestureHandler onHandlerStateChange={handler}>
            <Animated.View
              style={{
                backgroundColor: "gray",
                borderRadius: 10,
                padding: 5,
              }}
            >
              <Text style={{ color: "white" }}>trigger</Text>
            </Animated.View>
          </TapGestureHandler>
        )}
      </View>
    </View>
  );
};

const RandomContent = () => {
  const randomElements = useRef(null);
  if (randomElements.current == null) {
    randomElements.current = [];
    const numberOfRandomElements = Math.round(Math.random() * 9 + 1);
    for (let i = 0; i < numberOfRandomElements; i++) {
      randomElements.current.push(<RandomElement key={i} />);
    }
  }

  return <View style={styles.randomContent}>{randomElements.current}</View>;
};

function RandomElement() {
  const randomHeight = useRef(Math.round(Math.random() * 40 + 30));
  const label = useRef(labels[Math.round(Math.random() * 4)]);

  return (
    <View style={[styles.randomElement, { height: randomHeight.current }]}>
      <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
        <Text>{label.current}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  randomElement: {
    backgroundColor: "#EFEFF4",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
  },
  randomContent: {
    borderColor: "red",
    borderWidth: 1,
  },
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
