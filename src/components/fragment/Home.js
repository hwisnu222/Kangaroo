import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  Avatar,
  Subheading,
  Title,
  Portal,
  Modal,
  Button,
} from "react-native-paper";
import { SwipeListView } from "react-native-swipe-list-view";

// component
import Category from "../Category";
import ListTask from "../ListTask";

// dumbdata
import task from "../../config/task.json";
import category from "../../config/category.json";

export default function Home() {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
        <View style={styles.banner}>
          <Image
            source={require("../../../assets/icon/sun.png")}
            style={styles.imageBanner}
          />
          <View style={styles.imageBanner}>
            <Title>Title</Title>
            <Subheading>Subtitle</Subheading>
          </View>
        </View>

        <Title style={styles.category}>Cerita Motivasi</Title>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {category.map((item, index) => (
            <Category key={index} data={item} />
          ))}
        </ScrollView>

        <Title style={styles.category}>Misi Hari Ini</Title>
        <SwipeListView
          data={task}
          renderItem={(data, rowMap) => <ListTask key={data.id} data={data} />}
          renderHiddenItem={(data, rowMap) => (
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => {
                setDeleteModal(!deleteModal);
              }}
            >
              <Text style={styles.textOption}>Selesai{data.id}</Text>
            </TouchableOpacity>
          )}
          rightOpenValue={-75}
        />
      </ScrollView>

      {/* modal */}
      <Portal>
        <Modal
          visible={deleteModal}
          onDismiss={() => setDeleteModal(!deleteModal)}
          contentContainerStyle={styles.modal}
        >
          <Image source={require("../../../assets/icon/done.png")} />
          <Title>Yeayyy</Title>
          <Text>Misi telah selesai</Text>
          <Button
            mode="contained"
            style={styles.modalButton}
            onPress={() => setDeleteModal(!deleteModal)}
          >
            Lanjutkan
          </Button>
        </Modal>
      </Portal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
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
    backgroundColor: "#A0D8F8",
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 24,
    flexDirection: "row",
  },
  imageBanner: { width: 5, height: 5 },
  category: {
    marginTop: 24,
    marginBottom: 8,
    opacity: 0.8,
  },

  imageBanner: {
    marginLeft: 24,
  },
  optionButton: {
    backgroundColor: "#F8A0A0",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 16,
    height: 86,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textOption: {
    fontWeight: "700",
    color: "#ffffff",
    fontSize: 20,
    transform: [{ rotate: "270deg" }],
  },
  modal: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 50,
    paddingVertical: 100,
    margin: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  modalButton: {
    backgroundColor: "#202B40",
    marginTop: 24,
  },
});
