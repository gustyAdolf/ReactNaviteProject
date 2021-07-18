import axios from "axios";
import { API_URL } from "../config/api";

const aInstance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getCharacters = () => {
  const url = "/character";
  return aInstance.get(url);
};

export const getEpisodes = () => {
  const url = "/episode";
  return aInstance.get(url);
};

export const getLocations = () => {
  const url = "/location";
  return aInstance.get(url);
};

export const getCharacterBy = params => {
  const url = "/character";
  return aInstance.get(url, {params});
};
