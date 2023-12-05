import axios from "axios";

const getCartItems = async (setItems) => {
  try {
    // const response = await axios.get(`http://localhost:3000/cart`);
    const response = await axios.get(
      `https://shopon-backend-production.up.railway.app/cart`
    );
    if (response.data.success) setItems(response.data.items);
  } catch (e) {
    console.log(e);
  }
};

export default getCartItems;
