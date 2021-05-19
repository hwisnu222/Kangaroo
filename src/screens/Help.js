import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

// components
import HeaderBack from "../components/header/HeaderBack";

export default function Help() {
  return (
    <View>
      <HeaderBack title="Bantuan" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
      ></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
