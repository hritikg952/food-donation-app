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
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions/authActions";
import { COLORS, SIZES, FONTS } from "../../constants/index";
import { Input, Button } from "../../components";

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
  });

  const handleOnSubmit = () => {
    console.log(values);
    signup(values, dispatch).then((data) =>
      console.log("in signup page", data)
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...FONTS.largeTitle,
          marginTop: 70,
          marginBottom: 40,
          color: COLORS.primary,
          fontWeight: "bold",
        }}
      >
        Create Account
      </Text>
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior={Platform.OS === "ios" ? "padding" : "heigth"}
      >
        <View style={{ marginBottom: SIZES.padding * 4 }}>
          <View style={styles.inputContainer}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.darkGrayishBlue,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              Name
            </Text>
            <Input
              style={styles.input}
              placeholder="eg: Hritik Gupta"
              textContentType="name"
              onChangeText={(text) =>
                setValues({
                  ...values,
                  name: text,
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
              Phone Number
            </Text>
            <Input
              style={styles.input}
              placeholder="eg: +91456098983"
              textContentType="telephoneNumber"
              onChangeText={(text) =>
                setValues({
                  ...values,
                  phonenumber: text,
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
              Email
            </Text>
            <Input
              style={styles.input}
              placeholder="eg: your@email.com"
              textContentType="emailAddress"
              onChangeText={(text) =>
                setValues({
                  ...values,
                  email: text,
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
              placeholder="eg: somethingComplex"
              textContentType="password"
              onChangeText={(text) =>
                setValues({
                  ...values,
                  password: text,
                })
              }
            />
          </View>
        </View>
        <Button text="Sign Up" onPress={handleOnSubmit} />
      </KeyboardAvoidingView>

      <View
        style={{
          marginTop: SIZES.padding * 4,
          width: "100%",
          marginLeft: SIZES.padding * 4,
        }}
      >
        <Text style={{ ...FONTS.body3, color: COLORS.grayishBlue }}>
          Already have an account?
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.darkGrayishBlue,
              fontWeight: "bold",
            }}
          >
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding * 2,
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 25,
  },
  formContainer: {
    width: "90%",
    marginVertical: 20,
  },
});
