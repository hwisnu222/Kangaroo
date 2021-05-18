import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ListStory() {
  return (
    <View style={styles.list}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1560809451-9e77c2e8214a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        }}
        style={styles.thumbnail}
      />
      <View style={styles.body}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.subTitle}>Subtitle</Text>
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
  },
  subTitle: {
    opacity: 0.6,
    fontSize: 15,
  },
  thumbnail: {
    width: 56,
    height: 56,
    borderRadius: 10,
  },
});
