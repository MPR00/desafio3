import React from "react";
import { NavigationContainer, DarkTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, Button, Header } from "react-native-elements";
import { View } from 'react-native';

const Stack = createStackNavigator()

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  renderMenu () {
    return (
      <View style={{ padding: 10 }}>
        <Button
          title='Companhias - Thiago Nogueira'
          style={{ marginBottom: 10 }}
          onPress={(event) => this.props.navigation.navigate('Companhias')}>
        </Button>
        <Button title=' - ...' style={{ marginBottom: 10 }}></Button>
        <Button title=' - ...' style={{ marginBottom: 10 }}></Button>
        <Button title=' - ...' style={{ marginBottom: 10 }}></Button>
      </View>
    )
  }

  render() {
    return (
      <View style={{ height: 64 }}>
        <Header
          placement="left"
          backgroundColor="rgb(18, 18, 18)"
          barStyle="dark-content"
          containerStyle={{ height: 64, fontSize: 18, borderBottomColor: "rgb(39, 39, 41)" }}
          leftComponent={{ icon: 'menu', color: '#fff', onPress: this.props.navigation.openDrawer }}
          centerComponent={{ text: 'Início', style: { color: '#fff' } }}
        />

        {this.renderMenu()}
      </View>
    );
  }
}

export default HomeScreen;