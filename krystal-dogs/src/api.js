import axios from "axios";

export const fetchDogs = async () => {
  try {
    const response = await axios.get("https://random.dog/woof.json");
    return response.data;
  } catch (error) {
    return error;
  }
};
