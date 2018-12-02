import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";

import startMainTabs from "../MainTabs/StartMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/Headingtext";
import MainText from "../../components/UI/MainText/MainText";
import backgroundImage from "../../assets/background.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

import validate from "../../utility/validation";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        }
      }
    }
  };

  constructor(props) {
    super(props);

    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  loginHandler = () => {
    startMainTabs();
  };

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            )
          }
        }
      };
    });
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
            onPress={() => alert("pressed")}
          >
            Switch to login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="E-mail address"
              style={styles.inputText}
              value={this.state.controls.email.value}
              onChangeText={val => this.updateInputState("email")}
            />
            <View
              style={
                this.state.viewMode === "portrait"
                  ? styles.portraitPC
                  : styles.landscapePC
              }
            >
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portairtPW
                    : styles.landscapePW
                }
              >
                <DefaultInput
                  placeholder="Password"
                  style={styles.inputText}
                  value={this.state.controls.password.value}
                  onChangeText={val => this.updateInputState("password")}
                />
              </View>
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portairtPW
                    : styles.landscapePW
                }
              >
                <DefaultInput
                  placeholder="Confirm Password"
                  style={styles.inputText}
                  value={this.state.controls.confirmPassword.value}
                  onChangeText={val => this.updateInputState("confirmPassword")}
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
