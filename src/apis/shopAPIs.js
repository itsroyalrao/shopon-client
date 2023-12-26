import axios from "axios";
import { setProducts } from "../features/home/shopSlice";

const baseURL = "https://fakestoreapi.com";

const getApiProducts = async (dispatch) => {
  try {
    const response = await axios(`${baseURL}/products`);
    dispatch(setProducts(response.data));
  } catch (e) {
    console.log(e);
  }
};

export { getApiProducts };
