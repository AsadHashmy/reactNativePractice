import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomComponent = () => {
  return (
    <Text style={styles.textStyle}>
      Hellow React Native From Custom Component
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "orange",
    marginTop: 100,
  },
});
export default CustomComponent;
