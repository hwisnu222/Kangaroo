import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ListTask() {
  return (
    <View style={styles.list}>
      <Image source={require("../../assets/book.png")} />
      <View style={styles.body}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.subTitle}>Subtitle</Text>
      </View>
      <View styles={styles.mark}>
        <Text style={styles.markTask}>Prioritas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 24,
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
  },
  subTitle: {
    opacity: 0.6,
    fontSize: 15,
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
  },
});
