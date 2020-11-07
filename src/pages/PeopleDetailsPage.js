import React from 'react';
import { ScrollView ,StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity } from 'react-native';
import { toUpperFirst } from '../util'

export default class PeopleDetailsPage extends React.Component {

  render() {
    
    return (
      <ScrollView>
      <View style={style.usuario}>
        <Text style={style.menu}>NAVEGAÇÃO </Text>
        
        <Text style={style.imagem}>Imagem: </Text>
        <Text style={style.dados}>Nome: </Text>
        <Text style={style.dados}>Contato: </Text>
        <Text style={style.dados}>Endereço: </Text>
        <Text style={style.dados}>Escolaridade: </Text>
        <Text style={style.dados}>Data de nascimento: </Text>

        <View style={style.botao} >
        <Button 
          title = 'Voltar'
          onPress = {() => this.props.navigation.navigate('Contatos')}
        />
        </View>

      </View>
      </ScrollView>
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
    height: 250,
    width: 250,
    marginTop: 40,
    marginLeft: 85,
    marginRight: 80,
    marginBottom: 40,
    borderRadius: 600,
    backgroundColor: 'rgb(48, 40, 80)',
    aspectRatio: 1,
    alignItems: "center",
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
    marginTop: 25,
    marginBottom: 40,
    marginLeft: 110,
    marginRight: 110
  },

  botaoInterno: {
    width: 200,
    height: 30,
    fontSize: 20,
    textAlign: "center",
    borderRadius: 20,
    color:'rgb(28, 23, 46);',
    backgroundColor:  'rgb(27, 212, 171);'
  }
  
}
)