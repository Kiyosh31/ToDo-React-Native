import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";

import startMainTabs from "../MainTabs/StartMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/Headingtext";
import MainText from "../../components/UI/MainText/MainText";
import backgroundImage from "../../assets/background.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };

  constructor(props) {
    super(props);

    Dimensions.addEventListener("change", dims => {
      this.setState({
        viewMode:
          Dimensions.get("window").height > 500 ? "portrait" : "landscape"
      });
    });
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headingText = null;

    if (this.state.viewMode === "portrait") {
      headingText = (
        <MainText>
          <HeadingText>Login Bitch!</HeadingText>
        </MainText>
      );
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground
            color="#29aaf4"
            onPress={() => alert("pressed")}>
            Switch to login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="E-mail address"
              style={styles.inputText}
            />
            <View
              style={
                this.state.viewMode === "portrait"
                  ? styles.portraitPC
                  : styles.landscapePC
              }>
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portairtPW
                    : styles.landscapePW
                }>
                <DefaultInput placeholder="Password" style={styles.inputText} />
              </View>
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portairtPW
                    : styles.landscapePW
                }>
                <DefaultInput
                  placeholder="Confirm Password"
                  style={styles.inputText}
                />
              </View>
            </View>
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  inputText: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  landscapePC: {
    // password container
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPC: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePW: {
    // password wrapper
    width: "45%"
  },
  portairtPW: {
    width: "100%"
  }
});

export default AuthScreen;
