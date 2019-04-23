import React, { Component } from "react";
import { View } from "react-native";
import { Header, Text, Button } from "react-native-elements";
import { createAppContainer, createStackNavigator } from "react-navigation";

class CreateStep1Screen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button title="Cancel" onPress={() => navigation.navigate("Main")} />
      ),
      title: "Country",
      headerRight: (
        <Button
          title="Next"
          onPress={() => navigation.navigate("CreateStep2")}
        />
      ),
      gesturesEnabled: false
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Create Step1</Text>
      </View>
    );
  }
}

class CreateStep2Screen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Button title="Prev" onPress={() => navigation.goBack()} />,
    title: "Information",
    headerRight: (
      <Button title="Save" onPress={() => navigation.navigate("Main")} />
    )
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Create Step2</Text>
      </View>
    );
  }
}

export default createAppContainer(
  createStackNavigator(
    {
      CreateStep1: CreateStep1Screen,
      CreateStep2: CreateStep2Screen
    },
    {
      initialRouteName: "CreateStep1"
    }
  )
);
