import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabNavigation} />
        <Stack.Screen name="authStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
