import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Text,
  Thumbnail,
} from "native-base";
import colors from "../config/colors";
function ImagesScreen({ route, navigation }) {
  const recievedAlbum = route.params?.sendingAlbum;
  const [getImages, setImages] = useState();

  const fetchImages = async () => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${recievedAlbum.id}/photos`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setImages(jsonData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    fetchImages();
  }, []);

  const handlePressImage = (image) => {
    navigation.navigate("ShowImage", { sendingImage: image });
  };
  return (
    <Container>
      {getImages ? (
        <View>
          <List>
            <FlatList
              data={getImages}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Content>
                  <ListItem
                    style={{
                      backgroundColor: colors.light,
                      margin: 5,
                    }}
                    onPress={() => handlePressImage(item)}
                  >
                    <Left style={{ justifyContent: "center" }}>
                      <Thumbnail
                        square
                        large
                        source={{
                          uri: item.thumbnailUrl,
                        }}
                      />
                    </Left>
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
export default ImagesScreen;
