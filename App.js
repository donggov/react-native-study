import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Components/MainScreen';
import CreateScreen from './Components/CreateScreen';

const AppStackNavigator = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    CreateScreen: { screen: CreateScreen }
  },
  {
    initialRouteName: "MainScreen",
    // headerMode: "none"
  }
);

export default createAppContainer(AppStackNavigator);