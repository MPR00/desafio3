import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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

        <Image style={style.imagem} source={{ uri: this.state.info.fotografia }} />

        <Text style={style.infos}>
          <Text> Nome da Proprietário:</Text>
          {this.state.info.contact.contato}
        </Text>
        <Text style={style.infos}>
          <Text> Nome da Empresa:</Text>
          {this.state.info.contact.empresa_nome}
        </Text>
        <Text style={style.infos}>
          <Text> Fornecedor Grupo:</Text>
          {this.state.info.contact.grupo_nome}
        </Text>
        <Text style={style.infos}>
          <Text> Tel.:</Text>
          {this.state.info.contact.celular}
        </Text>
        <Text style={style.infos}>
          <Text> Email:</Text>
          {this.state.info.contact.email}
        </Text>
        <Text style={style.infos}>
          <Text> Cidade:</Text>
          {this.state.info.contact.cidade}
        </Text>
        <Text style={style.infos}>
          <Text> Estado:</Text>
          {this.state.info.contact.estado}
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
    width: '100%',
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
    display: 'flex',
    flex: 1,
    height: 250,
    width: 250,
    marginTop: 40,
    marginHorizontal: 'auto',
    marginBottom: 40,
    borderRadius: 600,
    backgroundColor: 'rgb(45, 52, 50)',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infos: {
    fontSize: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 5,
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
  },
  botao: {
    marginTop: 25,
    marginBottom: 40,
    marginLeft: 110,
    marginRight: 110
  }
}
)
//Deve aparecer NOME DA EMPRESA, CEL, EMAIL, CIDADE, ESTADO.