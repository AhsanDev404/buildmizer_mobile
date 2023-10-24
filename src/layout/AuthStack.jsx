import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Auth from "../screens/Auth";
const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="authMain" component={Auth} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
      </Stack.Navigator>
    </>
  );
}
