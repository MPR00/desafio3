import React from "react";
import { View, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

class List extends React.Component {
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
    const url = `https://demo7471880.mockable.io/contatos`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
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
    this.props.navigation.navigate('Detalhes', { item })
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={item => item.infos.email}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({ item }) => (
          <ListItem key={item.email} bottomDivider roundAvatar onPress={event => this.clickRow(event, item.infos)}>
            <Avatar source={{ uri: item.infos.thumbnail }} rounded/>
            <ListItem.Content>
              <ListItem.Title>{item.infos.Nome}</ListItem.Title>
              <ListItem.Subtitle>{item.infos.Sobrenome}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    );
  }
}

export default List;