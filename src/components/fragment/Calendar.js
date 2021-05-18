import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Alert } from "react-native";
import { Appbar, Card } from "react-native-paper";
import CalendarPicker from "react-native-calendar-picker";

// components
import TaskList from "../ListTask";
import HeaderTitle from "../header/HeaderTitle";

export default function Calendar() {
  const onDateChange = (date) => {
    Alert.alert("Date", `Date selected at ${date}`);
  };
  return (
    <SafeAreaView>
      <HeaderTitle title="Kalendar" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Card style={styles.card}>
          <CalendarPicker
            onDateChange={(date) => {
              onDateChange(date);
            }}
          />
        </Card>
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
  container: {
    marginHorizontal: 8,
    marginTop: 24,
  },
  card: {
    padding: 16,
  },
});
