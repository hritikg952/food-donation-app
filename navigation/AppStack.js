import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens";
import Tabs from "./Tabs";
import { fetchUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
const Stack = createStackNavigator();

const AppStack = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUser(dispatch);
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
