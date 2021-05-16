import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { Appbar, TextInput, Card, Switch, Title } from "react-native-paper";

// components
import HeaderTitle from "../header/HeaderTitle";

export default function Add() {
  const [alarm, setAlarm] = useState(true);
  return (
    <SafeAreaView>
      <HeaderTitle title="Add" />
      <View style={styles.container}>
        <Card style={styles.card}>
          <TextInput
            placeholder="Title"
            style={styles.textInput}
            mode="outlined"
            underlineColor="none"
          />
          <TextInput
            placeholder="Description"
            style={styles.textInput}
            mode="outlined"
            underlineColor="none"
            multiline={true}
          />
          <TextInput
            placeholder="Date"
            style={styles.textInput}
            mode="outlined"
            underlineColor="none"
          />
        </Card>

        <Card style={styles.cardAlarm}>
          <View style={styles.wrapAlarm}>
            <Title>Alarm</Title>
            <Switch
              value={alarm}
              onValueChange={() => setAlarm(!alarm)}
              color="#F2E2C9"
            />
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 26,
    marginTop: 24,
  },
  textInput: {
    marginBottom: 16,
    height: 52,
    borderRadius: 5,
  },
  card: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  cardAlarm: {
    paddingVertical: 20,
    paddingHorizontal: 10,

    marginTop: 24,
  },
  wrapAlarm: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
});
