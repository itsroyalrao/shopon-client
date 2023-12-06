import axios from "axios";
import getOrderedItems from "./getOrderedItems";

const cancelOrders = async (id, setItems) => {
  try {
    const user = localStorage.getItem("user");
    const response = await axios.delete(
      `http://localhost:3000/cart/order?user=${user}&id=${id}`
      // `https://shopon-backend-production.up.railway.app/cart/order?user=${user}`
    );
    console.log(response);
    getOrderedItems(setItems);
  } catch (e) {
    console.log(e);
  }
};

export default cancelOrders;
