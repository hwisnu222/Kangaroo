import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Appbar,
  Avatar,
  Subheading,
  Title,
  Portal,
  Dialog,
  Paragraph,
  Button,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import HeaderTitle from "../header/HeaderTitle";

export default function Account() {
  const navigation = useNavigation();
  const [dialog, setDialog] = useState(false);

  const handleDialog = () => {
    setDialog(!dialog);
  };
  return (
    <View>
      <HeaderTitle title="Akun" />
      <View style={styles.container}>
        <View style={styles.profile}>
          <Avatar.Image
            size={68}
            source={{
              uri: "https://uifaces.co/our-content/donated/Xp0NB-TL.jpg",
            }}
          />
          <View style={styles.bioProfile}>
            <Title>Patrick Star</Title>
            <Subheading style={styles.subheading}>Kode : 238jsj9</Subheading>
          </View>
        </View>
        <Text style={styles.menuList}>Akun</Text>
        <Text
          style={styles.menuList}
          onPress={() => navigation.navigate("Bookmark")}
        >
          Bookmark
        </Text>
        <Text
          style={styles.menuList}
          onPress={() => navigation.navigate("Help")}
        >
          Bantuan
        </Text>
        <Text style={styles.menuList}>Bagikan</Text>
        <Text style={styles.menuList} onPress={handleDialog}>
          Keluar
        </Text>
      </View>

      {/* dialog */}
      <Portal>
        <Dialog visible={dialog} onDismiss={handleDialog}>
          <Dialog.Title>Keluar aplikasi</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Apakah kamu ingin keluar?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleDialog} color="#000000">
              Batal
            </Button>
            <Button
              onPress={() => {
                navigation.navigate("Login");
              }}
              color="#ff0000"
            >
              Keluar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  menuList: {
    fontWeight: "700",
    fontSize: 16,
    paddingVertical: 16,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 24,
  },
  bioProfile: {
    marginLeft: 16,
  },
  subheading: {
    opacity: 0.5,
  },
});
