import React from "react";
import { Button, Header } from "react-native-elements";
import { View } from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  renderMenu() {
    return (
      <View style={{ padding: 10, backgroundColor: 'rgb(28, 23, 46);', height: 900 }}>
        <Button
          title='Thiago Nogueira de Carvalho'
          buttonStyle={{ marginTop: 20, marginBottom: 20, padding: 50, backgroundColor: "rgb(36, 29, 62);" }}
          onPress={(event) => this.props.navigation.navigate('Thiago')}>
        </Button>
        <Button
          title='Guijakelee'
          buttonStyle={{ marginBottom: 20, padding: 50, backgroundColor: "rgb(36, 29, 62);" }}
          onPress={(event) => this.props.navigation.navigate('GuiJakelee')}>
        </Button>
        <Button
          title='joaoV'
          buttonStyle={{ marginBottom: 20, padding: 50, backgroundColor: "rgb(36, 29, 62);" }}
          onPress={(event) => this.props.navigation.navigate('JoaoV')}>
        </Button>
        <Button
          title='Vinicius'
          buttonStyle={{ marginBottom: 20, padding: 50, backgroundColor: "rgb(36, 29, 62);" }}
          onPress={(event) => this.props.navigation.navigate('Vinicius')}>
        </Button>
      </View>
    )
  }

  render() {
    return (
      <View style={{ height: 64 }}>
        <Header
          placement="left"
          backgroundColor="rgb(36, 29, 62);"
          barStyle="dark-content"
          containerStyle={{
            height:90,
            fontSize: 40,
            marginTop: 10,
            borderBottomColor:
              "rgb(39, 39, 41)",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
            elevation: 15,
          }}
          leftComponent={{ icon: 'menu', color: '#1bd4accd', onPress: this.props.navigation.openDrawer }}
          centerComponent={{ text: 'Início', style: { color: '#1bd4accd' } }}
          placement="center"
        />

        {this.renderMenu()}
      </View>
    );
  }
}

export default HomeScreen;