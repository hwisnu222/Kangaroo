import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ListTask({ data }) {
  return (
    <View style={styles.list}>
      <Image source={require("../../assets/book.png")} />
      <View style={styles.body}>
        <Text style={styles.title}>{data.item.title}</Text>
        <Text style={styles.subTitle}>{data.item.content}</Text>
      </View>
      <View styles={styles.mark}>
        <Text style={styles.markTask}>Prioritas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 16,
  },
  body: {
    marginLeft: 24,
    flex: 1,
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 4,
    opacity: 0.8,
  },
  subTitle: {
    opacity: 0.6,
    fontSize: 15,
    height: 15,
  },
  mark: {
    paddingHorizontal: 48,
  },
  markTask: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: "#F8A0A0",
    borderRadius: 5,
    fontWeight: "700",
    opacity: 0.8,
  },
});
