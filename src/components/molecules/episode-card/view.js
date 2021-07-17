import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

class EpisodeCard extends Component {
  render() {
    const episode = this.props.episode;
    return (
      <TouchableOpacity style={styles.card}
                        onPress={() => this.props.onPress(this.props.episode)}>

        <Image style={styles.image}
               source={require('../../../assets/images/card_episode.jpeg')} />
        <View style={styles.infoContainer}>
          <Text style={styles.info}><Text style={styles.label}>Nombre: </Text> {episode?.name}</Text>
          <Text style={styles.info}><Text style={styles.label}>Fecha emisión: </Text> {episode?.air_date}</Text>
          <Text style={styles.info}><Text style={styles.label}>Episodio: </Text> {episode?.episode}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

EpisodeCard.defaultProps = {
  episode: {},
  onPress: () => {
  },
};

export default EpisodeCard;
