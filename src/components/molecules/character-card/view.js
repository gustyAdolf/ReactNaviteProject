import React, { Component } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from './styles';

class CharacterCard extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.props.onPress(this.props.character)}>

        <Image style={styles.image}
               source={{uri: this.props.character?.image}} />
        <Text>name</Text>
        <Text>status</Text>
        <Text>gender</Text>
        <Text>location</Text>
      </TouchableOpacity>
    );
  }
}

CharacterCard.defaultProps = {
  character: {},
  onPress: () => {
  },
};

export default CharacterCard;
