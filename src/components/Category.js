import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Category({ data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.itemCategory, { backgroundColor: data.color }]}
      onPress={() => {
        navigation.navigate("Story");
      }}
    >
      <View>
        <Image
          source={require("../../assets/icon/sun.png")}
          style={styles.iconButton}
        />
        <Text style={styles.textButton}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemCategory: {
    marginRight: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "flex-start",
    width: 150,
    borderRadius: 10,
    flexDirection: "column",
  },
  textButton: {
    fontSize: 18,
    marginTop: 6,
    color: "#202B40",
    fontWeight: "700",
    opacity: 0.8,
  },
  iconButton: {
    maxHeight: 24,
    width: 24,
  },
});
