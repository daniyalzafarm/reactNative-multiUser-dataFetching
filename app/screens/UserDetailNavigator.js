import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserDetailScreen from "./UserDetailScreen";
import AlbumScreen from "./AlbumScreen";
import PostScreen from "./PostScreen";
import TodoScreen from "./TodoScreen";
const Tab = createBottomTabNavigator();
function UserDetailNavigaor({ route }) {
  const recievedUser = route.params?.sendingRecord;
  // console.log(recievedUser);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        initialParams={{ sendingRecord: recievedUser }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          title: "User Details",
        }}
      />
      <Tab.Screen
        name="Album"
        component={AlbumScreen}
        initialParams={{ sendingRecord: recievedUser }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="image-album"
              color={color}
              size={size}
            />
          ),
          title: "Albums",
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        initialParams={{ sendingRecord: recievedUser }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="post" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Todos"
        component={TodoScreen}
        initialParams={{ sendingRecord: recievedUser }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted-square"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default UserDetailNavigaor;
