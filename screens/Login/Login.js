import React, { useState } from "react";
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { FONTS, SIZES, COLORS } from "../../constants";
import { Input, Button } from "../../components";
import { login } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    console.log(values);
    login(values, dispatch).then((data) => console.log("in login page", data));
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...FONTS.largeTitle,
          marginVertical: 70,
          color: COLORS.primary,
          fontWeight: "bold",
        }}
      >
        Login
      </Text>
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior={Platform.OS === "ios" ? "padding" : "heigth"}
      >
        <View style={{ marginBottom: SIZES.padding * 7 }}>
          <View style={styles.inputContainer}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.darkGrayishBlue,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              Email
            </Text>
            <Input
              style={styles.input}
              placeholder="Email"
              onChangeText={(email) =>
                setValues({
                  ...values,
                  email: email,
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.darkGrayishBlue,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              Password
            </Text>
            <Input
              style={styles.input}
              placeholder="password"
              textContentType="password"
              onChangeText={(password) =>
                setValues({
                  ...values,
                  password: password,
                })
              }
            />
          </View>
        </View>
        <Button onPress={() => handleLogin()}>Login</Button>
      </KeyboardAvoidingView>

      <View
        style={{
          marginTop: SIZES.padding * 4,
          width: "100%",
          marginLeft: SIZES.padding * 4,
        }}
      >
        <Text style={{ ...FONTS.body3, color: COLORS.grayishBlue }}>
          Are you a new user?
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.darkGrayishBlue,
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding * 2,
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 30,
  },
  formContainer: {
    width: "90%",
    marginVertical: 60,
  },
});

export default Login;
