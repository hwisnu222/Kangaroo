import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput, Title, Subheading } from "react-native-paper";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>
      <Subheading style={styles.subtitle}>
        Please login using email and password
      </Subheading>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        mode="outlined"
        underlineColor="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        mode="outlined"
        underlineColor="none"
        secureTextEntry
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        LOGIN
      </Button>
      <Text style={styles.register}>
        Belum punya akun?{" "}
        <Text
          style={styles.buttonRegister}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Daftar
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 24,
  },
  button: {
    width: "100%",
    marginTop: 24,
    height: 52,
    justifyContent: "center",
    backgroundColor: "#202B40",
  },
  textInput: {
    marginBottom: 16,
    height: 52,
    borderRadius: 5,
  },
  register: {
    textAlign: "center",
    marginTop: 16,
  },
  buttonRegister: {
    fontWeight: "700",
    borderRadius: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 68,
  },
});
