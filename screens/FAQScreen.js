import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import DefaultHeader from "../components/DefaultHeader";
import SafeWitHeaderContentView from "../components/Layout/SafeWitHeaderContentView";
import ExpandableInfoText from "../components/UI/ExpandableInfoText";
import ExpandableInfoTest from "../components/UI/ExpandableInfoTest";

// import { Text, View } from "../components/Themed";

const data = [
  {
    title: "Are you the management company?",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu leo, porta sit amet accumsan non, laoreet non nibh. Duis metus est, pharetra vitae turpis non, efficitur suscipit augue. Nulla ultricies leo id maximus ultricies. Donec consectetur dolor justo, eu pulvinar dolor aliquet euismod. Aenean tellus leo, ullamcorper sed dolor id, sollicitudin faucibus lectus. Nam enim ligula, malesuada eu odio in, hendrerit dictum libero. Aenean porta conse",
  },
  {
    title: "Do i pay ground rent?",
    text:
      "Nunc a sem et dolor mattis semper a sed augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque euismod vestibulum quam sit amet ullamcorper. Fusce nec arcu aliquet, sagittis metus et, ullamcorper ligula. Vivamus hendrerit, mau",
  },
  {
    title: "What are my Payment Terms/How do I make a Payment?",
    text:
      "Donec porttitor, nunc et aliquet tempor, nisi sapien lacinia nunc, at placerat augue justo sit amet tellus. Quisque id lorem in turpis pellentesque vestibulum. Nullam elit nunc, lobortis nec rutrum sed, iaculis aliquam felis. Nunc nec accumsan ante. Curabitur nulla neque, viverra a elit eu, faucibus sollicitudin mauris. Sed eget magna a purus cursus tincidunt eget vel diam. Nam augue augue, vehicula eget iacu",
  },
];

export default () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndexes, setOpenIndexes] = useState([false, true, false]);

  const handlePress = (index) => {
    // setOpenIndexes([true, false, false]);

    // const newOpenIndexes = [...openIndexes];

    // console.log(openIndexes);

    // newOpenIndexes[index] = !openIndexes[index];
    // console.log(newOpenIndexes);

    // setOpenIndexes[newOpenIndexes];

    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <SafeWitHeaderContentView>
      <DefaultHeader />
      <ScrollView style={styles.container}>
        <Text>FAQ</Text>
        {data.map((faq, index) => {
          return (
            <ExpandableInfoText
              data={faq}
              key={index}
              handlePress={handlePress}
              index={index}
              openIndex={openIndex}
              // open={openIndexes[index]}
            />
          );
        })}
      </ScrollView>
    </SafeWitHeaderContentView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
