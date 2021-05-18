import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { BottomNavigation, Button } from "react-native-paper";

// components
import HomeFragment from "../components/fragment/Home";
import TaskFragment from "../components/fragment/Task";
import AddFragment from "../components/fragment/Add";
import ScheduleFragment from "../components/fragment/Calendar";
import AccountFragment from "../components/fragment/Account";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "task", title: "Task", icon: "cube" },
    { key: "add", title: "Add", icon: "plus" },
    { key: "schedule", title: "Schedule", icon: "calendar" },
    { key: "account", title: "Account", icon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeFragment,
    task: TaskFragment,
    add: AddFragment,
    schedule: ScheduleFragment,
    account: AccountFragment,
  });

  return (
    <SafeAreaView style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.bar}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#ffffff",
  },
  container: { height: "100%" },
});
