import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  List,
  ListItem,
  H2,
} from "native-base";
import colors from "../config/colors";
function PostDetailsScreen({ route }) {
  const recievedPost = route.params?.sendingPost;
  const [getPostComments, setPostComments] = useState();

  const fetchComments = async () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${recievedPost.id}/comments`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setPostComments(jsonData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    fetchComments();
  }, []);
  return (
    <Container>
      <Content>
        <Card
          style={{
            paddingHorizontal: 30,
            paddingVertical: 5,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <CardItem>
            <Left>
              <Body>
                <Text style={{ fontWeight: "bold" }}>{recievedPost.title}</Text>
                <Text note>Post Id : {recievedPost.id}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body style={{ paddingLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Body Text:</Text>
              <Text>{recievedPost.body}</Text>
            </Body>
          </CardItem>
        </Card>
        {/* <View style={{ flex: 1, padding: 20 }}> */}
        <H2 style={{ flex: 1, paddingLeft: 25, paddingTop: 25 }}>Comments</H2>
        <Container style={{ flex: 1, height: "100%" }}>
          {getPostComments ? (
            // <View style={styles.container}>
            <List>
              <FlatList
                data={getPostComments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Content>
                    <ListItem
                      style={{
                        backgroundColor: colors.white,
                        margin: 5,
                      }}
                    >
                      <Body>
                        <Text style={{ fontWeight: "bold" }}>{item.email}</Text>
                        <Text>{item.body}</Text>
                      </Body>
                    </ListItem>
                  </Content>
                )}
              />
            </List>
          ) : (
            // </View>
            // <View style={{ flex: 1 }}>
            <ActivityIndicator color={colors.primary} size="large" />
            // </View>
          )}
        </Container>
        {/* </View> */}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default PostDetailsScreen;
