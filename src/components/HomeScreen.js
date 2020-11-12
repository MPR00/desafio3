import React from "react";
import { Button, Header } from "react-native-elements";
import { View } from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  renderMenu () {
    return (
      <View style={{ padding: 10 }}>
        <Button
          title='Thiago Nogueira de Carvalho'
          style={{ marginBottom: 10 }}
          onPress={(event) => this.props.navigation.navigate('Thiago')}>
        </Button>
        <Button
          title='Guijakelee'
          style={{ marginBottom: 10 }}
          onPress={(event) => this.props.navigation.navigate('GuiJakelee')}>
        </Button>
        <Button
          title='joaoV'
          style={{ marginBottom: 10 }}
          onPress={(event) => this.props.navigation.navigate('JoaoV')}>
        </Button>
        <Button
          title='Vinicius'
          style={{ marginBottom: 10 }}
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