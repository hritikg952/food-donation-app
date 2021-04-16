import React from "react";
import Route from "./navigation/Route";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/inter";
import { Provider } from "react-redux";
import { LogBox } from "react-native";

import store from "./redux/store";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
  let [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
    "RobotoCondensed-Bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-BoldItalic": require("./assets/fonts/RobotoCondensed-BoldItalic.ttf"),
    "RobotoCondensed-Italic": require("./assets/fonts/RobotoCondensed-Italic.ttf"),
    "RobotoCondensed-Light": require("./assets/fonts/RobotoCondensed-Light.ttf"),
    "RobotoCondensed-LightItalic": require("./assets/fonts/RobotoCondensed-LightItalic.ttf"),
    "RobotoCondensed-regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
