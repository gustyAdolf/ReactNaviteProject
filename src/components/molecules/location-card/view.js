import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

class LocationCard extends Component {
  render() {
    const location = this.props.location;
    return (
      <TouchableOpacity style={styles.card}
                        onPress={() => this.props.onPress(this.props.location)}>

        <Image style={styles.image}
               source={require('../../../assets/images/card_location.jpeg')} />
        <View style={styles.infoContainer}>
          <Text style={styles.info}><Text style={styles.label}>Nombre: </Text> {location?.name}</Text>
          <Text style={styles.info}><Text style={styles.label}>Tipo: </Text> {location?.type}</Text>
          <Text style={styles.info}><Text style={styles.label}>Dimensión: </Text> {location?.dimension}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

LocationCard.defaultProps = {
  location: {},
  onPress: () => {
  },
};

export default LocationCard;
