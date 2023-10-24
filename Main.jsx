import React from "react";
import { Text } from "react-native-paper";

import { StatusBar } from "react-native";
import MainNavigation from "./src/layout/MainNavigation";
export default function Main() {
  return (
    <>
      <StatusBar />
      <MainNavigation />
    </>
  );
}
