import React from 'react';
import { StyleSheet, Text, View, Image, Buttom, TouchableOpacity } from 'react-native';
import { toUpperFirst } from '../util'


export default class PeopleDetailsPage extends React.Component {

  render() {
    return (
      <View style={style.usuario}>
        <Text style={style.menu}>NAVEGAÇÃO </Text>
        <Text style={style.imagem}>Imagem: </Text>
        <Text style={style.dados}>Nome: </Text>
        <Text style={style.dados}>Contato: </Text>
        <Text style={style.dados}>Endereço: </Text>
        <Text style={style.dados}>Escolaridade: </Text>
        <Text style={style.dados}>Data de nascimento: </Text>
        <Text style={style.botao}>Voltar</Text>
        <Buttom style={style.botao} 
        title ='Voltar'
        />
      </View>

    )
  }
}

const style = StyleSheet.create({
  usuario: {
    marginTop: 40,
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
    color:'rgb(28, 23, 46);',
    backgroundColor:  'rgb(27, 212, 171);'
  },

  imagem: {
    marginTop: 40,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 40,
    borderRadius: 600,
    backgroundColor: 'rgb(48, 40, 80)',
    aspectRatio: 1,
    flex: 1,
    textAlign: "center"
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
    color:'rgba(247, 247, 247, 0.891);',
    backgroundColor: 'rgb(36, 29, 62)'
  },

  botao: {
    width: 200,
    height: 30,
    marginTop: 25,
    marginBottom: 40,
    marginLeft: 110,
    marginRight: 110,
    fontSize: 20,
    borderRadius: 20,
    textAlign: "center",
    color:'rgb(28, 23, 46);',
    backgroundColor:  'rgb(27, 212, 171);'
  }
  
}
)