import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function HeaderBack({ title }) {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
});
