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
      <CustomComponent />
      <Text style={styles.textStyle}>Hellow {myVar} from App.js</Text>
      {myElement}
      <Text>HI, {getFullName("Syed", "Asad")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "orange",
  },
});
export default App;
