import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity } from 'react-native';
import { toUpperFirst } from '../util';
import maleIcon1 from '../assets/maleIcon1.png';

export default class PeopleDetailsPage extends React.Component {

  constructor(props) {
    super(props)
    const { info = {} } = props.route.params

    this.state = {
      info
    }
  }


  render() {

    return (
      <View style={style.usuario}>

        <Image style={style.imagem} source={{ uri: this.state.info.picture.thumbnail }} />

        <Text style={style.dados}>
          <Text> Name: </Text>
          {this.state.info.nameContact}
        </Text>

        <Text style={style.dados}>
          <Text> Phone: </Text>
          {this.state.info.phone}
        </Text>

        <Text style={style.dados}>
          <Text> Adress: </Text>
          {this.state.info.address}
        </Text>

        <Text style={style.dados}>
          <Text> kinship:
          </Text> {this.state.info.kinship}
        </Text>

        <Text style={style.dados}>
          <Text> date: </Text>
          {this.state.info.date}
        </Text>

        <View style={style.botao} >
          <Button
            title='Voltar'
            color="rgb(27, 212, 171);"
            onPress={() => this.props.navigation.navigate('Contatos')}
          />
        </View>

      </View>
    )
  }
}

const style = StyleSheet.create({
  usuario: {
    marginTop: 0,
    width: 425,
    height: 820,
    backgroundColor: 'rgb(28, 23, 46);'
  },

  menu: {
    width: 425,
    height: 50,
    paddingTop: 15,
    fontSize: 15,
    textAlign: "center",
    color: 'rgb(28, 23, 46);',
    backgroundColor: 'rgb(27, 212, 171);'
  },

  imagem: {
    height: 250,
    width: 250,
    marginTop: 40,
    marginLeft: 85,
    marginRight: 80,
    marginBottom: 40,
    borderRadius: 600,
    backgroundColor: 'rgb(36, 29, 62)',
    aspectRatio: 1,
    alignItems: "center"
  },

  dados: {
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderTopColor: 'rgb(49, 42, 75);',
    borderBottomWidth: 1,
    borderBottomColor: ' rgb(49, 42, 75);',
    borderRightWidth: 1,
    borderRightColor: 'rgb(49, 42, 75);',
    borderLeftWidth: 1,
    borderLeftColor: 'rgb(49, 42, 75);',
    borderRadius: 20,
    color: 'rgba(247, 247, 247, 0.891);',
    backgroundColor: 'rgb(36, 29, 62)'
  },

  botao: {
    marginTop: 25,
    marginBottom: 40,
    marginLeft: 110,
    marginRight: 110
  }

}
)