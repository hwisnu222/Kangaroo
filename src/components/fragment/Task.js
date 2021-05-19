import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Portal, Modal, Title, Button } from "react-native-paper";
import HeaderTitle from "../header/HeaderTitle";

import task from "../../config/task.json";

// component
import ListTask from "../ListTask";

export default function Task() {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <View>
      <HeaderTitle title="Tugas" />
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 16,
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
