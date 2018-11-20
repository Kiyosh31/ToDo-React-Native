import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";

// Register the screens for react-native-navigation
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);

// Start a App for react-native-navigation
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});
