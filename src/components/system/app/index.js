import React, { Component } from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import { Provider } from "react-redux";
import store from "../../../config/redux";
import Home from "../../pages/home";
import Characters from "../../pages/characters/index";
import Episodes from "../../pages/episodes";
import Locations from "../../pages/location";


const navBarProps = {
  backTitle: "Categories",
  backTitleEnabled: true,
  back: true,
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="Home" title="Categories" component={Home} initial />
            <Scene key="Characters" component={Characters} {...navBarProps} />
            <Scene key="Episodes" component={Episodes} {...navBarProps} />
            <Scene key="Locations" component={Locations} {...navBarProps} />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
