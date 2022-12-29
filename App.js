import React from "react";
import { Text, StyleSheet, View } from "react-native";
import OurButton from "./src/screens/OurButton";

const App = () => {
  return (
    <View>
      <OurButton />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "orange",
  },
});
export default App;
