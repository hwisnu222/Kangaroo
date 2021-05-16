import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Avatar, Subheading, Title } from "react-native-paper";

// component
import Category from "../Category";
import ListTask from "../ListTask";

export default function Home() {
  let category = [];
  for (let i = 0; i <= 5; i++) {
    category.push(<Category key={i} />);
  }
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View>
          <Title style={styles.titleHeader}>Hii Wisnu</Title>
          <Subheading style={styles.subheadingHeader}>
            Yuk Kerjakan tugas hari ini
          </Subheading>
        </View>
        <Avatar.Icon
          size={36}
          icon="bell"
          style={styles.icon}
          color="#000000"
        />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.banner}>
          <Image source={require("../../../assets/book.png")} />
          <View style={styles.imageBanner}>
            <Title>Title</Title>
            <Subheading>Subtitle</Subheading>
          </View>
        </View>
        <Title style={styles.category}>Cerita Motivasi</Title>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {category}
        </ScrollView>
        <Title style={styles.category}>Misi Hari Ini</Title>
        <ListTask />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 16,
    marginTop: 48,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleHeader: { fontSize: 30, opacity: 0.8 },
  icon: { backgroundColor: "#F3EBEB" },
  subheadingHeader: { opacity: 0.4 },
  container: {
    marginHorizontal: 16,
  },
  banner: {
    backgroundColor: "#F0ECE5",
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 24,
    flexDirection: "row",
  },
  category: {
    marginTop: 24,
    marginBottom: 8,
  },

  imageBanner: {
    marginLeft: 24,
  },
});
