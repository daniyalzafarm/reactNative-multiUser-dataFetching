import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AppNavigator from "./app/screens/AppNavigator";
import NavigationTheme from "./app/screens/NavigationTheme";
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
