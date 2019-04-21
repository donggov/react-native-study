import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SettingScreen extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   headerLeft: <Button title="Prev" onPress={() => navigation.goBack()} />,
  //   title: 'Setting',
  //   headerRight: <Button title="Save" onPress={() => navigation.navigate('Main')} />,
  // });

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen</Text>
      </View>
    );
  }
}
