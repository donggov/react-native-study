import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <Icon name='menu' onPress={() => console.log('menu')} />,
      title: 'Donggov',
      headerRight: <Icon name='add' onPress={() => navigation.navigate('CreateScreen')} />,
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Main Screen</Text>
      </View>
    );
  }
}
