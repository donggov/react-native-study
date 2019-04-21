import React, { Component } from 'react';
import { View, Button, AsyncStorage } from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
    // title: 'Please sign in',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Login" onPress={this._loginAsync} />
      </View>
    );
  }

  _loginAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}
