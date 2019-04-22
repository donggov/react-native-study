import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { StackActions } from "react-navigation";

export default class CreateStep2Screen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Button title="Prev" onPress={() => navigation.goBack()} />,
    title: "Information",
    headerRight: <Button title="Save" onPress={() => navigation.popToTop()} />
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Create Step2</Text>
      </View>
    );
  }
}
