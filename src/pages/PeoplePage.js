import React from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import PeopleList from '../component/PeopleList'



export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      peoples: []
    }
  }
 //http://demo5410349.mockable.io/pessoas/?nat=br&results=10
  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=20')
    .then(response => {
      const {results} = response.data
      this.setState({
        peoples: results
      })
    })
  }
 
  render(){
    return (
      <ScrollView>
        <View>
            <PeopleList peoples={this.state.peoples}
            onPressItem={() => {
              this.props.navigation.navigate('Informações do Contato', {name: ''})
              }} /> 
        </View>
        </ScrollView>
    );
  }
 
}