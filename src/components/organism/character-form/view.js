import React, { Component } from "react";
import { Button, TextInput, View } from "react-native";

class CharacterSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
    };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Search character"
          onChangeText={text => this.setState({ textInput: text })}
          defaultValue={""}
        />
        <Button title={"Search"} onPress={() => this.props.onSubmit(this.state.textInput)} />
      </View>
    );
  }
}

export default CharacterSearch;

