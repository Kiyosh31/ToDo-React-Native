import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <DefaultInput
        placeholder="placename"
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
      />
    );
  }
}

export default PlaceInput;
