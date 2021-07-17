import React, { Component } from "react";
import { FlatList, RefreshControl, SafeAreaView, Text, View } from "react-native";
import styles from "../episodes/styles";
import LocationCard from "../../molecules/location-card/view";
import { Actions } from "react-native-router-flux";

class Locations extends Component {
  componentDidMount() {
    this.props.initList();
  }

  onLocationTapped= location => {
    // this.props.setEpisode(episode);
    Actions.push('Location');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList data={this.props.list}
                  contentContainerStyle={styles.contentContainer}
                  refreshControl={
                    <RefreshControl
                      refreshing={this.props.loading}
                      onRefresh={this.props.initList}
                    />
                  }
                  renderItem={({ item }) => (
                    <LocationCard location={item}
                                  onPress={this.onLocationTapped}/>
                  )} />
      </SafeAreaView>
    );
  }
}

export default Locations;
