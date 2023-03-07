import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const getAllCharacters = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    return data;
  } catch (error) {
    console.error("Something went wrong" + error.message);
  }
};

export const getCharacterById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    console.error("Something went wrong in searching by id" + error.message);
  }
};

export const getCharactersByName = async (query) => {
  try {
    const data = await axios.get(`${BASE_URL}/?name=${query}`);
    return data;
  } catch (error) {
    console.error("Something went wrong in searching by name" + error.message);
  }
};
