import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as firebase from "firebase";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { COLORS } from "../constants";

const firebaseConfig = {
  apiKey: "AIzaSyCmOpjh3o4k8Pe-U1DFPdvQ8lhGYJqLHak",
  authDomain: "hungerhelp-dev.firebaseapp.com",
  projectId: "hungerhelp-dev",
  storageBucket: "hungerhelp-dev.appspot.com",
  messagingSenderId: "701863281006",
  appId: "1:701863281006:web:3fc128dd4c79c5ccc3817f",
  measurementId: "G-PW5K7NSMGZ",
};

const Route = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const [userData, setUserData] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUserData(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: COLORS.primary,
      background: "#fff",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      {userData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Route;
