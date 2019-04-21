import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  View,
} from 'react-native';

import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import MainScreen from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen'


class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the Main screen or Login screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Login');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
}

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  }
);


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Main: MainScreen,
    Login: LoginStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
