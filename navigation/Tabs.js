import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, AddFood } from "../screens";
import { icons } from "../constants";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddFood"
        component={AddFood}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={icons.plus}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
