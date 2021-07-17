import React, { Component } from "react";
import { FlatList, SafeAreaView, StatusBar, Text } from "react-native";
import CategoriesCard from "../../molecules/categories-card";
import { Actions } from "react-native-router-flux";
import styles from './styles';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: CHARACTER_ID, title: 'Characters', image_dir: require('../../../assets/images/category_characters.jpeg') },
        { id: EPISODE_ID, title: 'Episodes', image_dir: require('../../../assets/images/category_episodes.png') },
        { id: LOCATIONS_ID, title: 'Locations', image_dir: require('../../../assets/images/category_locations.jpeg') },
      ],
    };
  }

  onCategoryPress = (category) => {
    Actions.push(category.title);
  };

  render() {
    return (
      <>
        <StatusBar/>
          <SafeAreaView style={styles.container}>
            <FlatList data={this.state.categories}
                      contentContainerStyle={styles.contentContainer}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) => (
                        <CategoriesCard category={item}
                                        onPress={category => this.onCategoryPress(category)} />
                      )}
            numColumns={1}/>

          </SafeAreaView>
      </>
    );
  }
}

const CHARACTER_ID = '@character';
const EPISODE_ID = '@episode';
const LOCATIONS_ID = '@locations';

export default Home;
