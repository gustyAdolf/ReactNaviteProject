import React, { Component } from "react";
import { FlatList, RefreshControl, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import EpisodeCard from "../../molecules/episode-card";
import { Actions } from "react-native-router-flux";

class Episodes extends Component{

  componentDidMount() {
    this.props.initList();
  }

  onEpisodeTapped = episode => {
    // this.props.setEpisode(episode);
    Actions.push("Episode");
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
                    <EpisodeCard episode={item}
                    onPress={this.onEpisodeTapped}/>
                  )} />
      </SafeAreaView>
    );
  }
}

export default Episodes;
