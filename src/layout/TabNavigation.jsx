import React, { useState } from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeStack from "./HomeStack";
import ProjectStack from "./ProjectStack";
import CalculatorStack from "./CalculatorStack";
import ProfileStack from "./ProfileStack";
import AuthStack from "./AuthStack";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  const [isAuthenticate , setIsAuthenticate] = useState(false)
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      activeColor="#E8AA33"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: "#000" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="Project"
        component={isAuthenticate ? ProjectStack: AuthStack}
        options={{
          tabBarLabel: "Project",
          tabBarIcon: "briefcase",
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={CalculatorStack}
        options={{
          tabBarLabel: "Calculator",
          tabBarIcon: "calculator",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: "account",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
