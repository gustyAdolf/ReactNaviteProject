import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

class CategoriesCard extends Component {

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.category)}
        style={styles.card}>
        <Image style={styles.image} source={this.props.category?.image_dir} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{this.props.category?.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

CategoriesCard.defaultProps = {
  category: { title: "Characters", image_dir: "" },
  onPress: () => {
  },
};

export default CategoriesCard;
