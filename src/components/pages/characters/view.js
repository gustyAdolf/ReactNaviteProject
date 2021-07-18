import React, { Component } from "react";
import { FlatList, RefreshControl, SafeAreaView, Text, View } from "react-native";
import CharacterCard from "../../molecules/character-card";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import CharacterSearch from "../../organism/character-form";

class Characters extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initList();
  }

  onCharacterTapped = character => {
    this.props.setCharacter(character);
    Actions.push("Character", {character});
  };

  searchCharacter = (value) => {
    this.props.onSubmit(value);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CharacterSearch onSubmit={value => this.searchCharacter(value)}></CharacterSearch>
        <FlatList data={this.props.list}
                  contentContainerStyle={styles.contentContainer}
                  refreshControl={
                    <RefreshControl
                      refreshing={this.props.loading}
                      onRefresh={this.props.initList}
                    />
                  }
                  renderItem={({ item }) => (
                    <CharacterCard character={item}
                                   onPress={this.onCharacterTapped} />
                  )}
        numColumns={1}/>
      </SafeAreaView>
    );
  }
}

export default Characters;
