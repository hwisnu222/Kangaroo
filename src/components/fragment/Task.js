import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";
import HeaderTitle from "../header/HeaderTitle";

// component
import ListTask from "../ListTask";

export default function Task() {
  return (
    <View>
      <HeaderTitle title="Tugas" />
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 16,
  },
});
