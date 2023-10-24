import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Project from '../screens/Project';

const Stack = createStackNavigator();
export default function ProjectStack() {
  return (
    <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="projectMain" component={Project} />
        </Stack.Navigator>
    </>
  )
}