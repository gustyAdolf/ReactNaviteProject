import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import characterReducer from "../redux/characters/reducer";
import episodesReducer from "../redux/episodes/reducer";
import locationsReducer from "../redux/locations/reducer";

const rootReducer = combineReducers({
  characters: characterReducer,
  episodes: episodesReducer,
  locations: locationsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
