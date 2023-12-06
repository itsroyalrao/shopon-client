import axios from "axios";

const getOrderedItems = async (setItems) => {
  try {
    const user = localStorage.getItem("user");
    const response = await axios.get(
      `http://localhost:3000/cart/order?user=${user}`
      // `https://shopon-backend-production.up.railway.app/cart/order?user=${user}`,
    );
    setItems(response.data.orders);
  } catch (e) {
    console.log(e);
  }
};

export default getOrderedItems;
