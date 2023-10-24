import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from '../screens/Calculator';

const Stack = createStackNavigator();
export default function CalculatorStack() {
  return (
    <>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="calculatorMain" component={Calculator} />
    </Stack.Navigator>
</>
  )
}