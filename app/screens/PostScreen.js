import React, { useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
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

function PostScreen({ route, navigation }) {
  const recievedUser = route.params?.sendingRecord;
  // console.log(recievedUser);
  const [getData, setData] = useState();

  const fetchData = async () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${recievedUser.id}/posts`)
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

  const handlePressPost = (post) => {
    navigation.navigate("PostDetails", { sendingPost: post });
  };
  return (
    <Container>
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
                    onPress={() => handlePressPost(item)}
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
export default PostScreen;
