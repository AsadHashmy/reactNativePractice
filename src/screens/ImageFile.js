import { View } from "react-native";
import React from "react";
import CardDetails from "../components/CardDetails";

const ImageFile = () => {
  return (
    <View>
      <CardDetails
        textData="My First Image"
        imgSrc={require("../../assets/test.jpg")}
      />
      <CardDetails
        textData="My Second Image"
        imgSrc={require("../../assets/test.jpg")}
      />
    </View>
  );
};

export default ImageFile;
