import axios from "axios";
import { emptyCart } from "./removeFromCart";

const orderItems = async (items) => {
  try {
    const user = localStorage.getItem("user");
    const response = await axios.post(
      `http://localhost:3000/cart/order`,
      // `https://shopon-backend-production.up.railway.app/cart/order`,
      { user, items }
    );
    if (response.data.success) {
      emptyCart();
      window.location.href = "/orders";
    }
  } catch (e) {
    console.log(e);
  }
};

export default orderItems;
