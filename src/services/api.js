import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const getAllCharacters = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    console.log("data", data);
    return data;
  } catch (error) {
    console.error("Something went wrong" + error.message);
  }
};
