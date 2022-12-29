import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const OurButton = () => {
  return (
    <View>
      <Text style={styles.textStyle}>OurButton</Text>
      <Button
        title="Join Our Community"
        onPress={() => {
          // return console.log("Read My Medium Blogs");
          Alert.alert("Simple Button Pressed");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          console.log("read it!");
          Alert.alert("Simple Button Pressed");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("../../assets/test.jpg")}
        />
        <Text>Read My Medium Blogs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OurButton;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 200,
    textAlign: "center",
    fontSize: 30,
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
});
