import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class PeopleDetailsPage extends React.Component {

  constructor(props) {
    super(props)
    const { item = {} } = props.route.params

    this.state = {
      info: item || {}
    }
  }

  render() {
    return (
      <View style={style.usuario}>

        <Image style={style.imagem} source={{ uri: this.state.info.thumbnail }} />

        <Text style={style.infos}>
          <Text> Nome: </Text>
          {this.state.info.Nome}
        </Text>
        <Text style={style.infos}>
          <Text> Sobrenome: </Text>
          {this.state.info.Sobrenome}
        </Text>
        <Text style={style.infos}>
          <Text> Email: </Text>
          {this.state.info.email}
        </Text>
        <Text style={style.infos}>
          <Text> Tel.: </Text>
          {this.state.info.telefone}
        </Text>
        <Text style={style.infos}>
          <Text> Data de nascimento: </Text>
          {this.state.info.nascimento}
        </Text>
        <Text style={style.infos}>
          <Text> Sexo: </Text>
          {this.state.info.sexo}
        </Text>
        <Text style={style.infos}>
          <Text> Tipo sanguineo: </Text>
          {this.state.info.tiposangue}
        </Text>
      </View>
    )
  }

}

const style = StyleSheet.create({ //add o css aki
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row'
  },
  usuario: {
    marginTop: 0,
    height: '100%',
    backgroundColor: 'rgb(255, 255, 255);'
  },
  menu: {
    height: 50,
    paddingTop: 15,
    fontSize: 15,
    textAlign: "center",
    color: 'rgb(128, 128, 128);',
    backgroundColor: 'rgb(27, 212, 171);'
  },
  linetext: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 7
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 10,
    borderRadius: 50
  },
  imagem: {
    height: 250,
    width: 250,
    marginTop: 40,
    marginHorizontal: 'auto',
    marginBottom: 40,
    borderRadius: 600,
    backgroundColor: 'rgb(45, 52, 50)',
    aspectRatio: 1,
    alignItems: "center",
  },
  infos: {
    fontSize: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgb(45, 52, 50);',
    borderBottomWidth: 1,
    borderBottomColor: ' rgb(45, 52, 50);',
    borderRightWidth: 1,
    borderRightColor: 'rgb(45, 52, 50);',
    borderLeftWidth: 1,
    borderLeftColor: 'rgb(45, 52, 50);',
    borderRadius: 20,
    color: 'rgba(247, 247, 247, 0.891);',
    backgroundColor: 'rgb(102, 102, 102)'//item da lista de detalhes
  }
})
