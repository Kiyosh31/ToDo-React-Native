import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.inputText, props.style, props.valid ? null : styles.invalid]}
  />
);

const styles = StyleSheet.create({
  inputText: {
    width: "100%",
    borderWidth: 1,
    borderColor: 5,
    marginTop: 8,
    marginBottom: 8
  },
  invalid: {
    backgroundColor: "#f9c0c0",
    borderColor: "red"
  }
});

export default defaultInput;
