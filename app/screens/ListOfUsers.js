import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Content,
  List,
  ListItem,
  Body,
  Right,
  Text,
} from "native-base";
import { auto } from "async";
import colors from "../config/colors";

function ListOfUsers({ navigation }) {
  const [getData, setData] = useState();

  const fetchData = async () => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  const handlePressUser = (user) => {
    navigation.navigate("UserDetails", { sendingRecord: user });
  };
  // const handlePressUser = (user) => {
  //   navigation.navigate("UserDetails", {
  //     screen: "UserDetailScreen",
  //     params: { sendingRecord: user },
  //   });
  // };
  return (
    <Container>
      <StatusBar style={auto} />
      {getData ? (
        <View>
          <List>
            <FlatList
              data={getData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Content>
                  <ListItem
                    style={{
                      backgroundColor: colors.light,
                      margin: 5,
                    }}
                    onPress={() => handlePressUser(item)}
                  >
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.email}</Text>
                    </Body>
                    <Right>
                      <MaterialCommunityIcons
                        name="subdirectory-arrow-right"
                        size={24}
                        color="grey"
                      />
                    </Right>
                  </ListItem>
                </Content>
              )}
            />
          </List>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      )}
    </Container>
  );
}

export default ListOfUsers;
