import * as types from './types';

export const initialState = {
  list: [],
  item: null,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_EPISODES_ITEM:
      return {...state, item: action.payload?.item};

    case types.UPDATE_EPISODES_LIST:
      return {
        ...state,
        list: action.payload?.list,
      };

    case types.UPDATE_EPISODES_LOADING:
      return {
        ...state,
        loading: action.payload?.loading,
      };

    default:
      return state;
  }
};

export default reducer;
