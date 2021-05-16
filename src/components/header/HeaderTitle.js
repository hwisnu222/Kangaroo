import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default function HeaderTitle({ title }) {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
});
