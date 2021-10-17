import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListOfUsers from "./ListOfUsers";
import UserDetailNavigator from "./UserDetailNavigator";
import ImagesScreen from "./ImagesScreen";
import ShowImageScreen from "./ShowImageScreen";
import PostDetailsScreen from "./PostDetailsScreen";
import MainScreen from "./MainScreen";
import colors from "../config/colors";
const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator
    // Options for All Screens
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="MainScreen"
      component={MainScreen}
      options={{
        title: "Home",
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ListOfUsers"
      component={ListOfUsers}
      options={{
        title: "All Users",
      }}
    />
    <Stack.Screen
      name="UserDetails"
      component={UserDetailNavigator}
      options={{
        title: "User's Information",
        // headerShown: false,
      }}
    />
    <Stack.Screen
      name="Images"
      component={ImagesScreen}
      options={{
        title: "All Images",
      }}
    />
    <Stack.Screen
      name="ShowImage"
      component={ShowImageScreen}
      options={{
        title: "Image",
      }}
    />
    <Stack.Screen
      name="PostDetails"
      component={PostDetailsScreen}
      options={{
        title: "Post Details",
      }}
    />
  </Stack.Navigator>
);
export default AppNavigator;
