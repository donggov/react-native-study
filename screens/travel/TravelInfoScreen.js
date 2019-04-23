import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class TravelInfoScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     headerLeft: <Button title="Cancel" onPress={() => navigation.navigate('Main')} />,
  //     title: 'Country',
  //     headerRight: <Button title="Next" onPress={() => navigation.navigate('CreateStep2')} />,
  //   }
  // }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Travel Information</Text>
      </View>
    );
  }
}
