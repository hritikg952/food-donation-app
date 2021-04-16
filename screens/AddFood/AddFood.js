import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useStore } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { Camera, Header, Button } from "../../components";
import { addDonation } from "./action";

const AddFood = ({ navigation }) => {
  const store = useStore();

  //** STATES */
  const [imageUrls, setImageUrls] = useState([]);
  const [data, setData] = useState({
    pickupFrom: "",
    foodItems: "",
    serve: "",
    expiryDate: new Date(),
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  //!################################################

  //** IMAGE UPLOADING FUNCTIONS */
  const pickFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImageUrls([...imageUrls, result.uri]);
  };
  const pickFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImageUrls([...imageUrls, result.uri]);
  };
  //!################################################################

  const handleDonation = () => {
    addDonation(data, store).then((res) => {
      console.log(res);
    });
  };

  const onExpiryDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || data.expiryDate;
    setData({ ...data, expiryDate: currentDate });
    setShowDatePicker(false);
  };

  const getDate = () => {
    let tempDate = data.expiryDate.toString().split(" ");
    return data.expiryDate !== ""
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : "";
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.container}>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.darkTextColor,
            marginBottom: SIZES.padding * 2,
          }}
        >
          Food Details
        </Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={{ ...FONTS.body3 }}>Pickup from </Text>
            <TextInput
              style={styles.input}
              placeholder="eg: location"
              onChangeText={(text) =>
                setData({
                  ...data,
                  pickupFrom: text,
                })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ ...FONTS.body3 }}>Food item(s)</Text>
            <TextInput
              style={styles.input}
              placeholder="eg: Allo sabji"
              onChangeText={(text) =>
                setData({
                  ...data,
                  foodItems: text,
                })
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={{ ...FONTS.body3 }}>Serve (1-500)</Text>
            <TextInput
              style={styles.input}
              placeholder="10"
              onChangeText={(text) =>
                setData({
                  ...data,
                  serve: text,
                })
              }
            />
          </View>
          <Pressable
            onPress={() => {
              console.log("press");
              setShowDatePicker(!showDatePicker);
            }}
          >
            <View style={styles.inputContainer}>
              <Text style={{ ...FONTS.body3 }}>Expire by</Text>
              <TextInput
                style={styles.input}
                value={getDate()}
                editable={false}
              />
              {console.log(showDatePicker)}
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={data.expiryDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onExpiryDateChange}
                  minimumDate={new Date()}
                />
              )}
            </View>
          </Pressable>
          <View style={styles.inputContainer}>
            <Text style={{ ...FONTS.body3, marginBottom: 5 }}>
              Upload Image
            </Text>
            <View style={styles.imageOptionContainer}>
              <Pressable
                onPress={() => pickFromCamera()}
                style={styles.optionContainer}
              >
                <Image
                  source={icons.camera}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </Pressable>
              <Pressable
                onPress={() => pickFromGallery()}
                style={styles.optionContainer}
              >
                <Image
                  source={icons.photoGallery}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </Pressable>
            </View>
          </View>

          {imageUrls.length > 0 && (
            <View style={styles.imagePreviewContainer}>
              {imageUrls.map((url, index) => {
                return (
                  <Image
                    key={index}
                    source={{ uri: url }}
                    resizeMode="contain"
                    style={{
                      width: 100,
                      height: 100,
                      marginRight: 10,
                      marginBottom: 10,
                      borderRadius: SIZES.radius * 0.5,
                    }}
                  />
                );
              })}
            </View>
          )}

          <Button onPress={handleDonation}>Donate</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: SIZES.padding * 3,
    flexDirection: "column",
  },
  container: {
    paddingTop: 0,
    padding: SIZES.padding * 2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  formContainer: {
    flexDirection: "column",
    width: "100%",
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    borderRadius: SIZES.radius * 0.4,
    ...SIZES.shadow,
  },
  label: {},
  imageOptionContainer: {
    height: 80,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  optionContainer: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: "100%",
  },
  inputContainer: {
    marginBottom: SIZES.padding * 1.5,
  },
  input: {
    paddingVertical: SIZES.padding * 0.9,
    paddingHorizontal: SIZES.padding * 1.2,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius * 0.1,
    marginTop: SIZES.padding * 0.5,
    borderColor: COLORS.darkgray,
    borderWidth: 1,
  },
  imagePreviewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  button: {
    width: "100%",
    padding: SIZES.padding,
    color: COLORS.darkTextColor,
    backgroundColor: COLORS.primary,
    fontWeight: "bold",
    alignItems: "center",
  },
});

export default AddFood;
