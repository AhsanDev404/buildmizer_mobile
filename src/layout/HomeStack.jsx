import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="homeMain" component={Home} />
        </Stack.Navigator>
    </>
  )
}