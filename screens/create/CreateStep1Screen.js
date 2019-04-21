import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class CreateStep1Screen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <Button title="Cancel" onPress={() => navigation.goBack()} />,
      title: 'Country',
      headerRight: <Button title="Next" onPress={() => navigation.navigate('CreateStep2')} />,
      gesturesEnabled: false
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Create Step1</Text>
      </View>
    );
  }
}
