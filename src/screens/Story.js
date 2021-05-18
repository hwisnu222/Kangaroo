import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

// components
import HeaderBack from "../components/header/HeaderBack";
import ListStory from "../components/ListStory";

export default function Story() {
  return (
    <View>
      <HeaderBack title="Cerita" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <ListStory />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
