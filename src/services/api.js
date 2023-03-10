import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const getAllCharacters = async (page) => {
  try {
    const { data } = await axios.get(`${BASE_URL}?page=${page}`);
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

export const getCharactersByName = async (query, page) => {
  try {
    const data = await axios.get(`${BASE_URL}/?name=${query}&page=${page}`);
    return data;
  } catch (error) {
    console.error("Something went wrong in searching by name" + error.message);
  }
};
