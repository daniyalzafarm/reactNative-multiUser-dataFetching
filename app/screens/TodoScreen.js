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
import colors from "../config/colors";
function TodoScreen({ route }) {
  const recievedUser = route.params?.sendingRecord;
  // console.log(recievedUser);
  const [getData, setData] = useState();

  const fetchData = async () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${recievedUser.id}/todos`)
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
                  >
                    <Body>
                      <Text>{item.title}</Text>
                    </Body>
                    <Right>
                      {item.completed == true ? (
                        <MaterialCommunityIcons
                          name="checkbox-marked-circle-outline"
                          size={24}
                          color="green"
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="progress-alert"
                          size={24}
                          color="red"
                        />
                      )}
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

export default TodoScreen;
