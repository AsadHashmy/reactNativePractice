import React from "react";
import { Text, StyleSheet, View } from "react-native";
import FlatListDemo from "./src/screens/FlatListDemo";

const App = () => {
  return (
    <View>
      <FlatListDemo />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "orange",
  },
});
export default App;
