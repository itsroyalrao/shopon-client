import axios from "axios";

const getCartItems = async (setItems) => {
  try {
    const response = await axios.get(`http://localhost:3000/cart`);
    if (response.data.success) setItems(response.data.items);
  } catch (e) {
    console.log(e);
  }
};

export default getCartItems;
