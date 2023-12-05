import axios from "axios";

const addedToCart = async (id) => {
  try {
    const response = await axios.post(`http://localhost:3000/cart`, { id });
    if (response.data.success) window.location.href = "/cart";
  } catch (e) {
    console.log(e);
  }
};

export default addedToCart;
