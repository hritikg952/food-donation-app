import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
export default function Button({ children, ...rest }) {
  return (
    <Pressable {...rest}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 1.5,
    alignItems: "center",
    backgroundColor: COLORS.primary,
    width: "100%",
    borderRadius: SIZES.radius * 0.4,
  },
  buttonText: {
    color: COLORS.lightTextColor,
    fontWeight: "bold",
    ...FONTS.body3,
  },
});
