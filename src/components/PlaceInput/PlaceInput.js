import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

const placeInput = props => (
  <DefaultInput
    placeholder="placename"
    value={props.placeData.value}
    valid={props.placeData.valid}
    touched={props.placeData.touched}
    onChangeText={props.onChangeText}
  />
);

export default placeInput;
