import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {COLORS, FONTS} from '../../constants';
export default function Input({
  placeholder,
  onChange,
  textContentType,
  ...rest
}) {
  return (
    <TextInput
      style={({...FONTS.body3}, styles.input)}
      placeholder={placeholder}
      textContentType={textContentType}
      secureTextEntry={textContentType === 'password' && true}
      {...rest}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    paddingBottom: 5,
    height: 35,
    borderBottomWidth: 1,
    borderColor: COLORS.grayishBlue,
  },
});
