import React, { Component } from "react";
import styles from "./styles";
import { Image, ScrollView, Text, View } from "react-native";

class Character extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aspectRatio: null,
    };
  }

  componentDidMount() {
    this.getImageAspectRatio();
  }

  getImageAspectRatio = async () => {
    if (this.props.character?.image) {
      Image.getSize(this.props.character?.image, (width, height) => {
        this.setState({ aspectRatio: width / height });
      });
    }
  };

  render() {
    const { character } = this.props;
    const { aspectRatio } = this.state;
    return (
      <ScrollView>
        {aspectRatio ? (
          <Image
            style={[styles.image, { aspectRatio }]}
            source={{ uri: character?.image }}
          />
        ) : null}

        <LabelValueBlock label={"Nombre: "} value={character?.name} />
        <LabelValueBlock label={"Estado: "} value={character?.status} />
        <LabelValueBlock label={"Especie: "} value={character?.species} />
        <LabelValueBlock label={"Ubicación: "} value={character?.location.name} />
        <LabelValueBlock label={"Género: "} value={character?.gender} />
      </ScrollView>
    );
  }
}

class LabelValueBlock extends Component {
  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.label}>{this.props.label || ""}</Text>
        <Text style={styles.value}>{this.props.value || ""}</Text>
      </View>
    );
  }
}

export default Character;
