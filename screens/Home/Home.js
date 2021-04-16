import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Button, Header } from "../../components";
import { fetchUser } from "../../redux/actions/userActions";
import { signout } from "../../redux/actions/authActions";
import { FONTS, SIZES, COLORS } from "../../constants";

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  console.log("userState ####", user);
  const distatch = useDispatch();
  const handleSignout = () => {
    signout(distatch);
  };
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.container}></View>
      <Text>{user.name}</Text>
      <Button onPress={handleSignout}>Signout</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: SIZES.padding * 3,
    flexDirection: "column",
  },
  container: {
    padding: SIZES.padding * 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
