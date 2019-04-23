import React, { Component } from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { View, AsyncStorage } from "react-native";
import { Icon, ListItem, Header, Text, Button } from "react-native-elements";
import CreateScreen from "./create/CreateScreen";
import TravelScreen from "./travel/TravelScreen";

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerMode: "none"
  });

  componentWillMount() {
    console.log("Main Screen componentWillMount");
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Header
          leftComponent={
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          }
          centerComponent={{ text: "Main" }}
          rightComponent={
            <Icon name="add" onPress={() => navigation.navigate("Create")} />
          }
        />
        <Text>Main</Text>
        <Text />
        <Text />
        <Button title="France" onPress={this._moveToTravelScreen} />
        <Button title="Italy" onPress={this._moveToTravelScreen} />
        <Button title="England" onPress={this._moveToTravelScreen} />
        <Text />
        <Text />
        <Text />
        <Text />
      </View>
    );
  }

  _moveToTravelScreen = () => {
    this.props.navigation.navigate("Travel");
  };
}

class CurrnecyScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Header
          leftComponent={
            <Icon
              name="keyboard-arrow-left"
              onPress={() => navigation.goBack()}
            />
          }
          centerComponent={{ text: "Currnecy" }}
        />
        <Text>Currnecy</Text>
      </View>
    );
  }
}

class Menu extends Component {
  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Login");
  };

  moveToExchange = () => {
    this.props.navigation.navigate("Currnecy");
  };

  moveToCurreny = () => {
    this.props.navigation.navigate("Currnecy");
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Header />
        <ListItem
          title="Exchange"
          leftIcon={{ name: "av-timer" }}
          rightIcon={{ name: "keyboard-arrow-right" }}
          onPress={this.moveToExchange}
        />
        <ListItem
          title="Currnecy"
          leftIcon={{ name: "av-timer" }}
          rightIcon={{ name: "keyboard-arrow-right" }}
          onPress={this.moveToCurreny}
        />
        <ListItem
          title="Friends"
          leftIcon={{ name: "flight-takeoff" }}
          rightIcon={{ name: "keyboard-arrow-right" }}
        />
        <Button title="Logout" type="clear" onPress={this.logout} />
      </View>
    );
  }
}

const MainStackNavigator = createStackNavigator(
  {
    Home: { screen: MainScreen },
    Currnecy: { screen: CurrnecyScreen }
  },
  {
    headerMode: "none"
  }
);

const HomeSwitchNavigator = createSwitchNavigator({
  Main: MainStackNavigator,
  Create: { screen: CreateScreen },
  Travel: { screen: TravelScreen }
});

HomeSwitchNavigator.navigationOptions = ({ navigation }) => {
  let drawerLockMode = "unlocked";
  if (navigation.state.index > 0) {
    drawerLockMode = "locked-closed";
  }

  return {
    drawerLockMode
  };
};

export default createAppContainer(
  createDrawerNavigator(
    {
      Home: HomeSwitchNavigator
    },
    {
      contentComponent: Menu
    }
  )
);
