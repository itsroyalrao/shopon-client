import axios from "axios";

const addedToCart = async (id) => {
  try {
    const response = await axios.put(`http://localhost:3000/products?id=${id}`);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export default addedToCart;
