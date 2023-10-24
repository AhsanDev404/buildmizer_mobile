import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Auth() {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../assets/auth.jpg")} style={styles.image} />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigate.navigate("login")}
      >
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  image: {
    width: 400,
    height: 400,
  },
  button: {
    width: "90%",
  },
});
