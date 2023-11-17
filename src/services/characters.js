import api from "./apiConfig";

export const getCharacters = async () => {
  try {
    const characters = await api.get("/characters");
    return characters.data;
  } catch (error) {
    console.log("Error:getting all characters: ", error);
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await api.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error: getting one character: ", error);
  }
};

export const createCharacter = async (characterData) => {
  try {
    const response = await api.post("/characters", characterData);
    return response.data;
  } catch (error) {
    console.log("Error: creating one character: ", error);
  }
};

export const editCharacter = async (id, characterData) => {
  try {
    const response = await api.put(`/character/${id}`, characterData);
    return response.data;
  } catch (error) {
    console.log("Error:editing one character: ", error);
  }
};

export const deleteCharacter = async (id) => {
  try {
    const response = await api.delete(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
