import React, { Component } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

class Characters extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initList();
  }

  render() {

    return (
        <SafeAreaView>
          <FlatList data={this.props.list}
                    renderItem={({ item }) => (
                      <Text>{item.name} </Text>
                    )} />
        </SafeAreaView>
    );
  }
}

export default Characters;
