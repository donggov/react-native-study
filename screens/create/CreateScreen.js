import React, { Component } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import {
  Header,
  Text,
  Button,
  ListItem,
  SearchBar
} from "react-native-elements";
import { createAppContainer, createStackNavigator } from "react-navigation";

class CreateStep1Screen extends Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    const list = [
      {
        name: "Korea",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
        // subtitle: 'Vice President'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "Korea",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
        // subtitle: 'Vice President'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "Korea",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
        // subtitle: 'Vice President'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "Korea",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
        // subtitle: 'Vice President'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      },
      {
        name: "France",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
        // subtitle: 'Vice Chairman'
      }
    ];

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        topDivider={true}
        containerStyle={{ paddingBottom: 5, paddingTop: 5 }}
        checkBox={{}}
      />
    );

    return (
      <View>
        <Header
          leftComponent={
            <Button
              title="Cancel"
              onPress={() => this.props.navigation.navigate("Main")}
            />
          }
          centerComponent={{ text: "Create Step 1" }}
          rightComponent={
            <Button
              title="Next"
              onPress={() => this.props.navigation.navigate("CreateStep2")}
            />
          }
        />
        <SearchBar
          placeholder="Type Here..."
          lightTheme={true}
          round={true}
          placeholder="Name or code"
          onChangeText={this.updateSearch}
          value={search}
        />
        <SafeAreaView>
          <FlatList
            keyExtractor={keyExtractor}
            data={list}
            renderItem={renderItem}
          />
        </SafeAreaView>
      </View>
    );
  }
}

class CreateStep2Screen extends Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Button
              title="Prev"
              onPress={() => this.props.navigation.goBack()}
            />
          }
          centerComponent={{ text: "Create Step 2" }}
          rightComponent={
            <Button
              title="Save"
              onPress={() => this.props.navigation.navigate("Main")}
            />
          }
        />
        <Text>Create Step2</Text>
      </View>
    );
  }
}

export default createAppContainer(
  createStackNavigator(
    {
      CreateStep1: CreateStep1Screen,
      CreateStep2: CreateStep2Screen
    },
    {
      initialRouteName: "CreateStep1",
      headerMode: "none"
    }
  )
);
