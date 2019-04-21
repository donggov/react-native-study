import React, { Component } from 'react';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import { View, Text, Button, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements'
import CreateStep1Screen from './create/CreateStep1Screen'
import CreateStep2Screen from './create/CreateStep2Screen'
import TravelScreen from './travel/TravelScreen'

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    // headerLeft: <Icon name='menu' onPress={() => navigation.openDrawer()} />,
    headerLeft: <Icon name='menu' onPress={() => console.log('menu')} />,
    title: 'Main',
    headerRight: <Icon name='add' onPress={() => navigation.navigate('CreateStep1')} />,
  });

  componentWillMount() {
    console.log('Main Screen componentWillMount');
  }

  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main</Text>
        <Text></Text>
        <Text></Text>
        <Button title="France" onPress={this._moveToTravelScreen} />
        <Button title="Italy" onPress={this._moveToTravelScreen} />
        <Button title="England" onPress={this._moveToTravelScreen} />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button title="Logout" onPress={this._logoutAsync} />
      </View>
    );
  }

  _moveToTravelScreen = () => {
    // this.props.navigation.navigate('Travel');
    console.log('_moveToTravelScreen ');
  };

  _logoutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
}

export default createAppContainer(createStackNavigator(
  {
    Main: MainScreen,
    // Create: CreateScreen,
    CreateStep1: CreateStep1Screen,
    CreateStep2: CreateStep2Screen,
    Travel: TravelScreen,
  }
));
