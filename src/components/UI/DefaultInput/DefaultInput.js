import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.inputText, props.style]}
  />
);

const styles = StyleSheet.create({
  inputText: {
    width: "100%",
    borderWidth: 1,
    borderColor: 5,
    marginTop: 8,
    marginBottom: 8
  }
});

export default defaultInput;
