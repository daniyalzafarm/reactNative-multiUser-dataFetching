import React from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from "native-base";
function ShowImageScreen({ route }) {
  recievedImage = route.params?.sendingImage;
  return (
    <Container>
      <Content>
        <Card
          style={{
            marginTop: 50,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: recievedImage.thumbnailUrl }} />
              <Body>
                <Text>{recievedImage.title}</Text>
                <Text note>Album id : {recievedImage.albumId}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: recievedImage.url }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

export default ShowImageScreen;
