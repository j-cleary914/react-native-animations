import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import ExpandableInfo from "./ExpandableInfo";

const data = [
  {
    title: "fake question 1 please fix me",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu leo, porta sit amet accumsan non, laoreet non nibh. Duis metus est, pharetra vitae turpis non, efficitur suscipit augue. Nulla ultricies leo id maximus ultricies. Donec consectetur dolor justo, eu pulvinar dolor aliquet euismod. Aenean tellus leo, ullamcorper sed dolor id, sollicitudin faucibus lectus. Nam enim ligula, malesuada eu odio in, hendrerit dictum libero. Aenean porta conse",
  },
  {
    title: "Does the walker choose the path or the path the walker?",
    text:
      "Nunc a sem et dolor mattis semper a sed augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque euismod vestibulum quam sit amet ullamcorper. Fusce nec arcu aliquet, sagittis metus et, ullamcorper ligula. Vivamumau um ante ipsum primis in faucibus orci luctus et ultrices posuere cubi",
  },
  {
    title: "Not all who wander are lost",
    text:
      "Donec porttitor, nunc et aliquet tempor, nisi sapien lacinia nunc, at placerat augue justo sit amet tellus. Quisque id lorem in turpis pellentesque vestibulum. Nullam elit nunc, lobortis nec rutrum sed, iaculis aliquam felis. Nunc nec accumsan ante",
  },
  {
    title: "code monkey wake up get coffee, codemonkey go to job",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu leo, porta sit amet accumsan non, laoreet non nibh. Duis metus est, pharetra vitae turpis non, efficitur suscipi.",
  },
  {
    title: "exactly how much wood WOULD a woodchuck chuck?",
    text:
      "Nunc a ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cur et, ullamcorper ligula. Vivamus hendrerit, mau",
  },
  {
    title: "like sand through the hourglass, so are the days of our lives",
    text: "Donec porttit iacu",
  },
];

const Accordion = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f4f4f6", padding: 16 }}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>My Accordian</Text>
      {data.map((ele, index) => {
        return <ExpandableInfo key={index} data={ele} />;
      })}
      <View style={{ height: 40 }}></View>
    </ScrollView>
  );
};

export default Accordion;
