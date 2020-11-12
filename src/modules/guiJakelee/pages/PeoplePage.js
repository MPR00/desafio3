import React from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import PeopleList from '../component/PeopleList'

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: []
    }
  }
  componentDidMount() {
    axios.get('https://demo6578179.mockable.io/contatos')
      .then(response => {
        const { results } = response.data
        this.setState({
          peoples: results
        })
      })
  }

  render() {
    return (
      <ScrollView>
        <View>
          <PeopleList peoples={this.state.peoples}
            keyExtractor={info => info.contato}
            onPressItem={(info) => {
              this.props.navigation.navigate('Detalhe da Pessoa', { info })
            }} />
        </View>
      </ScrollView>
    );
  }
}