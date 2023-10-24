import React from "react";
import Main from "./Main";
import CustomProvider from "./src/components/CustomProvider";
import { Text } from "react-native-paper";

export default function App() {
  return (
    <>
      <CustomProvider>
        <Main />
      </CustomProvider>
    </>
  );
}
