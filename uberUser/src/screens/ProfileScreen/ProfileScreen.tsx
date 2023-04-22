import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../../models";
import { useAuthContext } from "../../contexts/AuthContext/useAuthContext";
import { useNavigation } from "@react-navigation/native";

export const Profile = () => {
  const { sub, dbUser, addDbUser, settingDbUser } = useAuthContext();
  const navigation: any = useNavigation();
  const [userFormData, setUserFormData] = useState({
    name: dbUser?.name || "",
    address: dbUser?.address || "",
    lat: dbUser?.lat.toString() || "",
    lng: dbUser?.lng.toString() || "",
  });

  const { name, address, lat, lng } = userFormData;

  function onChangeInput(field: string, value: string) {
    setUserFormData({
      ...userFormData,
      [field]: value,
    });
  }

  async function creatUser() {
    addDbUser({
      name,
      address,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      sub,
    });
  }

  async function updateUser() {
    const user = await DataStore.save(
      User.copyOf(dbUser, (updated) => {
        updated.name = name;
        updated.address = address;
        updated.lat = parseFloat(lat);
        updated.lng = parseFloat(lng);
      })
    );
    settingDbUser(user);
  }

  const onSave = async () => {
    if (dbUser) {
      await updateUser();
    } else {
      await creatUser();
    }

    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={(value) => onChangeInput("name", value)}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={(value) => onChangeInput("address", value)}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={(value) => onChangeInput("lat", value)}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={(value) => onChangeInput("lng", value)}
        placeholder="Longitude"
        style={styles.input}
      />
      <Button onPress={onSave} title="Save" />

      <Text onPress={() => Auth.signOut()} style={styles.signOut}>
        Sign out
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  signOut: {
    textAlign: "center",
    margin: 10,
    color: "red",
  },
});
