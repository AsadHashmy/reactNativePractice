import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CardDetails = ({ textData, imgSrc }) => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>{textData}</Text>
      <Image style={styles.imageStyle} source={imgSrc} />
    </View>
  );
};

export default CardDetails;

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
