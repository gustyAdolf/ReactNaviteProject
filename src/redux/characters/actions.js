import * as types from "./types";
import * as api from "../../api";
import { Alert } from "react-native";

export const setLoading = (loading = false) => {
  return {
    type: types.UPDATE_CHARACTER_LOADING,
    payload: { loading },
  };
};

export const setList = (list = []) => {
  return {
    type: types.UPDATE_CHARACTER_LIST,
    payload: { list },
  };
};

export const setItem = item => {
  return {
    type: types.UPDATE_CHARACTER_ITEM,
    payload: { item },
  };
};

export const getList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const response = await api.getCharacters();
      const list = response.data?.results || [];
      dispatch(setList(list));
    } catch (e) {
      Alert.alert("Error", e.message || "Ha ocurrido un error");
    } finally {
      dispatch(setLoading(false));
    }
  };
};
