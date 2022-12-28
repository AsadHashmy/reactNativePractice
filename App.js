import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageFile from "./src/screens/ImageFile";

const App = () => {
  return (
    <View>
      <ImageFile />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "orange",
  },
});
export default App;
