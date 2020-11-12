import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements'

class ContactDetails extends Component {
  constructor (props) {
    super(props)
    const { item = {} } = props.route.params

    this.state = {
      item
    }
  }

  render() {
    return (
      <Card>
        <Card.Title>{ this.state.item.name }</Card.Title>
        <Card.Divider />

        <Card.Image source={{ uri: this.state.item.image }} />

        <Text style={{ marginBottom: 10, marginTop: 10 }}>
          <Text style={{fontWeight: 'bold'}}> Email: </Text> { this.state.item.email }
        </Text>

        <Text style={{ marginBottom: 10 }}>
          <Text style={{fontWeight: 'bold'}}> Telefone: </Text> { this.state.item.phone }
        </Text>

        <Text style={{ marginBottom: 10 }}>
          <Text style={{fontWeight: 'bold'}}> Site: </Text> { this.state.item.website }
        </Text>

        <Text style={{ marginBottom: 10 }}>
          <Text style={{fontWeight: 'bold'}}> País: </Text> { this.state.item.country }
        </Text>

        <Text style={{ marginBottom: 10 }}>
          <Text style={{fontWeight: 'bold'}}> Data de nascimento: </Text> { this.state.item.contact.birthday }
        </Text>

        <Text style={{ marginBottom: 10 }}>
          <Text style={{fontWeight: 'bold'}}> Genêro: </Text> { this.state.item.contact.gender }
        </Text>
      </Card>
    );
  }
}

export default ContactDetails;