import React, { Component } from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import { SocialIcon } from 'react-native-elements'

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
    // title: 'Please sign in',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Login" onPress={this._loginAsync} />
        <SocialIcon button title='Sign In With Google'  type='google-plus-official' raised={false} onPress={this._loginAsync} />
        <SocialIcon  button title='Sign In With Facebook'  type='facebook' raised={false} onPress={this._loginAsync} />
      </View>
    );
  }

  _loginAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}
