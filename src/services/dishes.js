import api from "./apiConfig";

export const getDishes = async () => {
  try {
    const response = await api.get("/dishes");
    return response.data;
  } catch (error) {
    console.log("Error:getting all dishes: ", error);
  }
};

export const getDish = async (id) => {
  try {
    const response = await api.get(`/dishes/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error: getting one dish: ", error);
  }
};

export const createDish = async (dishData) => {
  try {
    const response = await api.post("/dishes", dishData);
    return response.data;
  } catch (error) {
    console.log("Error: creating one dish: ", error);
  }
};

export const editDish = async (id, dishData) => {
  try {
    const response = await api.put(`/dishes/${id}`, dishData);
    return response.data;
  } catch (error) {
    console.log("Error:editing one dish: ", error);
  }
};

export const deleteDish = async (id) => {
  try {
    const response = await api.delete(`/dishes/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
