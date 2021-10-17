import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
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
import colors from "../config/colors";
function AlbumScreen({ route, navigation }) {
  const recievedUser = route.params?.sendingRecord;
  const [getData, setData] = useState();

  const fetchData = async () => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${recievedUser.id}/albums`
    )
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

  // const handleAlbumPressed = (album) => {
  //   navigation.navigate("Images", {
  //     screen: "ImagesScreen",
  //     params: { sendingAlbum: album },
  //   });
  // };

  const handleAlbumPressed = (album) => {
    navigation.navigate("Images", { sendingAlbum: album });
  };
  return (
    <Container>
      {/* <Header /> */}
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
                    onPress={() => handleAlbumPressed(item)}
                  >
                    <Body>
                      <Text>{item.title}</Text>
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

export default AlbumScreen;
