import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Challenge1 = () => {
  return (
    <View>
      <Text style={styles.text1}>Welcome To Thapa Technical Channel</Text>
      <Text style={styles.text2}>
        We Love React Native and I am a subscriber of Thapa Technical Channel
      </Text>
      <Text>Hi, My name is {myVar}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red",
  },
  text2: {
    fontSize: 30,
  },
});

export default Challenge1;
