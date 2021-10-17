import React from "react";
import { View, Text } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  H3,
} from "native-base";
function UserDetailScreen({ route }) {
  const recievedUser = route.params?.sendingRecord;
  // console.log(recievedUser);
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
                <H3>Basic Information</H3>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body style={{ marginLeft: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Name: </Text>
                <Text>{recievedUser.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Phone: </Text>
                <Text>{recievedUser.phone}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Email: </Text>
                <Text>{recievedUser.email}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Website: </Text>
                <Text>{recievedUser.website}</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Card
          style={{
            flex: 0,
            paddingHorizontal: 30,
            paddingVertical: 5,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <CardItem>
            <Left>
              <Body>
                <H3>Company Information</H3>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body style={{ marginLeft: 12, marginRight: 50 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Name: </Text>
                <Text>{recievedUser.company.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Catch Phrase: </Text>
                <Text>{recievedUser.company.catchPhrase}</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
        <Card
          style={{
            flex: 0,
            paddingHorizontal: 30,
            paddingVertical: 5,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <CardItem>
            <Left>
              <Body>
                <H3>Address Information</H3>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body style={{ marginLeft: 12, marginRight: 50 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Suite: </Text>
                <Text>{recievedUser.address.suite}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Street: </Text>
                <Text>{recievedUser.address.street}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Zipcode: </Text>
                <Text>{recievedUser.address.zipcode}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>City: </Text>
                <Text>{recievedUser.address.city}</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

export default UserDetailScreen;
