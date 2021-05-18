import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Title, Subheading, TextInput, Button } from "react-native-paper";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Registration</Title>
      <Subheading style={styles.subtitle}>
        yuk, isi email dan password kamu
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
      <TextInput
        placeholder="Age"
        style={styles.textInput}
        mode="outlined"
        underlineColor="none"
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Register
      </Button>
      <Text style={styles.register}>
        Sudah punya akun? <Text style={styles.buttonRegister}>Login</Text>
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
