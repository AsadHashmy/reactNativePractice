import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponents";
const App = () => {
  const myVar = "Asad";
  const myElement = <Text>Hellow please read my blogs! at Medium</Text>;
  const getFullName = (firstName, secondName) => {
    return `My Name is ${firstName} ${secondName}`;
  };
  return (
    <View>
      {/* <CustomComponent />
      <Text style={styles.textStyle}>Hellow {myVar} from App.js</Text>
      {myElement}
      <Text>HI, {getFullName("Syed", "Asad")}</Text> */}
      {/* Challenge 1 (35) */}
      <Text style={styles.text1}>Welcome To Thapa Technical Channel</Text>
      <Text style={styles.text2}>
        We Love React Native and I am a subscriber of Thapa Technical Channel
      </Text>
      <Text>Hi, My name is {myVar}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "orange",
  },
  text1: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red",
  },
  text2: {
    fontSize: 30,
  },
});
export default App;
