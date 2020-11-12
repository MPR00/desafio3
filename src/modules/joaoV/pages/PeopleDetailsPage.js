import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class PeopleDetailsPage extends React.Component {

  render() {

    return (
      <View style={style.usuario}>
        <Image style={style.imagem} source={require('../assets/maleIcon1.png')} />
        <Text style={style.dados}>Nome: Lucas Almeida</Text>
        <Text style={style.dados}>Numero: (71) 99290-3041</Text>
        <Text style={style.dados}>Endereço: Avenida Paulo VI</Text>
        <Text style={style.dados}>Parentesco: Irmão</Text>
        <Text style={style.dados}>Data de nascimento: 11/09/2000</Text>
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
    height: '100%',
    marginTop: 0,
    backgroundColor: 'rgb(28, 23, 46);'
  },

  menu: {
    height: 50,
    paddingTop: 15,
    fontSize: 15,
    textAlign: "center",
    backgroundColor: 'rgb(27, 212, 171);'
  },

  imagem: {
    height: 250,
    width: 250,
    marginTop: 40,
    marginHorizontal: 'auto',
    marginBottom: 40,
    borderRadius: 600,
    backgroundColor: 'rgb(36, 29, 62)',
    aspectRatio: 1,
    alignItems: "center",
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