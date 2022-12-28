import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ImageFile = () => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>This is ImageFile</Text>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/test.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
  imageStyle: {
    height: 300,
    width: 300,
  },
});

export default ImageFile;
