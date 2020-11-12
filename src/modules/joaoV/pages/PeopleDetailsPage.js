import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity } from 'react-native';
import { toUpperFirst } from '../util';
import maleIcon1 from '../assets/maleIcon1.png';

export default class PeopleDetailsPage extends React.Component {

  constructor(props) {
    super(props)
    const { info = {} } = props.route.params

    this.state = {
      error: null,
      refreshing: false,
      info: info || {}
    }
  }

  render() {

    return (
      <View style={style.usuario}>

        <Image style={style.imagem} source={{ uri: this.state.info.photo }} />

        <Text style={style.dados}>
          <Text> Nome: </Text>
          {this.state.info.listContact.nameContact}
        </Text>

        <Text style={style.dados}>
          <Text> Telefone: </Text>
          {this.state.info.listContact.phone}
        </Text>

        <Text style={style.dados}>
          <Text> Endereço: </Text>
          {this.state.info.listContact.address}
        </Text>

        <Text style={style.dados}>
          <Text> Parentesco:
          </Text> {this.state.info.listContact.kinship}
        </Text>

        <Text style={style.dados}>
          <Text> Data de nascimento: </Text>
          {this.state.info.listContact.date}
        </Text>

        <View style={style.botao} >
          <Button
            title='Voltar'
            color="rgb(27, 212, 171);"
            onPress={() => this.props.navigation.navigate('Agenda')}
          />
        </View>

      </View>
    )
  }
}

const style = StyleSheet.create({
  usuario: {
    height: '100%',
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
    paddingBottom: 10,
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
    marginTop: 15,
    marginBottom: 40,
    marginLeft: 110,
    marginRight: 110
  }
})