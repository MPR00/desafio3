import React from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import PeopleList from '../component/PeopleList';


export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: []
    }
  }

  componentDidMount() {
    axios.get('http://demo8350856.mockable.io/ListaContato')
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
          <PeopleList 
          peoples={this.state.peoples}
          keyExtractor={info => info.phone}
            onPressItem={() => {
              this.props.navigation.navigate('Informações do Contato', { info })
            }} />
        </View>
      </ScrollView>
    );
  }

}