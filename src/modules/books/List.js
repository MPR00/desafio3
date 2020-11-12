import React, { Component } from "react";
import { View, Text } from "react-native";

class List extends Component {
  constructor(props) {
    super(props)

    this.navigation = props.navigation
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >
        <Text>Books!</Text>
      </View>
    );
  }
}

export default List;