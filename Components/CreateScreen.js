import React, { Component } from "./node_modules/react";
import { View, Text, StyleSheet } from "react-native";

export default class CreateSceen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <Text onPress={() => navigation.goBack()}>Cancel</Text>,
      title: "Country",
      headerRight: <Text>Next</Text>
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Create Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
