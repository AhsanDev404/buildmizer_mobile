import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeStack from "./HomeStack";
import ProjectStack from "./ProjectStack";
import CalculatorStack from "./CalculatorStack";
import ProfileStack from "./ProfileStack";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      activeColor="#6200ee"
      inactiveColor="#828282"
      barStyle={{ backgroundColor: "#ffffff" }}
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
        component={ProjectStack}
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
