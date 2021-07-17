import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

class CharacterCard extends Component {
  render() {
    const character = this.props.character;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.props.onPress(this.props.character)}>

        <Image style={styles.image}
               source={{ uri: character?.image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.info}><Text style={styles.label}>Nombre: </Text> {character?.name}</Text>
          <Text style={styles.info}><Text style={styles.label}>Estado: </Text> {character?.status}</Text>
          <Text style={styles.info}><Text style={styles.label}>Género: </Text> {character?.gender}</Text>
          <Text style={styles.info}><Text style={styles.label}>Ubicación: </Text> {character?.location?.name}</Text>
        </View>
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
