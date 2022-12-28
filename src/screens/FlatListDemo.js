import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

const FlatListDemo = () => {
  const names = [
    {
      id: "1",
      name: "Dasa",
    },
    {
      id: "2",
      name: "Alex",
    },

    {
      id: "3",
      name: "Drake",
    },
    {
      id: "4",
      name: "Alexander",
    },
    {
      id: "5",
      name: "Hawkeye",
    },
    {
      id: "6",
      name: "Tony",
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.id;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      inverted
      data={names}
      renderItem={(element) => {
        console.log(element);
        return <Text style={styles.textStyle}>{element.item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});

export default FlatListDemo;
