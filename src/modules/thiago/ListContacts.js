import React from "react";
import { View, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

class ListContacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://run.mocky.io/v3/3f3ab614-27ba-4935-b22c-e6ca672a7411`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data,
          error: res.error || null,
          refreshing: false
        });
      })
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          marginLeft: "14%"
        }}
      />
    );
  };

  clickRow (event, item) {
    this.props.navigation.navigate('ContactDetails', { item })
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={item => item.email}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({ item }) => (
          <ListItem key={item.email} bottomDivider roundAvatar onPress={event => this.clickRow(event, item)}>
            <Avatar source={{ uri: item.image }} rounded/>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    );
  }
}

export default ListContacts;