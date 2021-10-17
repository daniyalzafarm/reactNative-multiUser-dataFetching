import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { H2, Button } from "native-base";
import colors from "../config/colors";
function MainScreen({ navigation }) {
  return (
    // <ImageBackground
    //   blurRadius={1}
    //   style={{
    //     flex: 1,
    //     justifyContent: "flex-end",
    //     alignItems: "center",
    //   }}
    //   source={require("../images/background.jpg")}
    // >
    <View style={styles.container}>
      {/* <View> */}
      <H2
        style={{
          color: "white",
          paddingTop: 80,
          fontWeight: "bold",
          fontSize: 40,
          textAlign: "center",
          lineHeight: 50,
          flex: 1,
        }}
      >
        Multiple User Data Fetching
      </H2>
      <Button
        style={{ marginBottom: 50, backgroundColor: colors.primary }}
        block
        light
        onPress={() => {
          navigation.navigate("ListOfUsers");
        }}
      >
        <Text style={{ color: colors.white, fontSize: 24, fontWeight: "bold" }}>
          Fetch Data
        </Text>
      </Button>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    paddingHorizontal: 50,
    alignItems: "center",
    width: "100%",
  },
});
export default MainScreen;
