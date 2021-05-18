import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Category() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.itemCategory}
      onPress={() => {
        navigation.navigate("Story");
      }}
    >
      <View>
        <Image
          source={require("../../assets/icon/sun.png")}
          style={styles.iconButton}
        />
        <Text style={styles.textButton}>Kategori</Text>
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
    backgroundColor: "#F2E2C9",
    flexDirection: "column",
  },
  textButton: {
    fontSize: 18,
    marginTop: 6,
    color: "#202B40",
    fontWeight: "700",
  },
  iconButton: {
    maxHeight: 24,
    width: 24,
  },
});
