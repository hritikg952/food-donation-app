import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { icons, FONTS, SIZES, COLORS } from "../../constants";
const Header = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        {route.name === "Home" ? (
          <Pressable>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={icons.backArrow}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </Pressable>
        )}
      </View>
      <View>
        <Text style={{ ...FONTS.h3 }}>Home</Text>
      </View>
      <View>
        <Pressable>
          <Image
            source={icons.circleUser}
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});

export default Header;
