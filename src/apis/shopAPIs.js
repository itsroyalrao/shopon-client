import axios from "axios";

const baseURL = "https://fakestoreapi.com";

const getApiProducts = async (setItems) => {
  try {
    const response = await axios(`${baseURL}/products`);
    setItems((prevProducts) => [...prevProducts, ...response.data]);
  } catch (e) {
    console.log(e);
  }
};

export { getApiProducts };
