import axios from "axios";
import { url } from "./onMobile";

const user = localStorage.getItem("user");

const addedToCart = async (id, title, imageURL, price, description) => {
  try {
    const response = await axios.post(`${url()}/auth/cart`, {
      user,
      id,
      title,
      imageURL,
      price,
      description,
    });
    if (response.data.success) window.location.href = "/cart";
  } catch (e) {
    console.log(e);
  }
};

const getCartItems = async (setItems, setTotal) => {
  try {
    const user = localStorage.getItem("user");

    const response = await axios.get(`${url()}/auth/cart?user=${user}`);

    if (response.data.success) {
      let total = 0;
      response.data.items.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotal(total);
      setItems(response.data.items);
    } else setItems([]);
  } catch (e) {
    console.log(e);
  }
};

const decreaseQuantity = async (id) => {
  try {
    const response = await axios.post(`${url()}/auth/cart/decrease`, {
      user,
      id,
    });
    if (response.data.success) window.location.href = "/cart";
  } catch (e) {
    console.log(e);
  }
};

const removeFromCart = async (id) => {
  try {
    const response = await axios.delete(
      `${url()}/auth/cart/remove?user=${user}&id=${id}`
    );
    if (response.data.success) window.location.href = "/cart";
  } catch (e) {
    console.log(e);
  }
};

const emptyCart = async () => {
  try {
    const user = localStorage.getItem("user");

    await axios.delete(`${url()}/auth/cart?user=${user}`);
  } catch (e) {
    console.log(e);
  }
};

const orderItems = async (items) => {
  try {
    const user = localStorage.getItem("user");
    const response = await axios.post(`${url()}/auth/orders`, { user, items });
    if (response.data.success) {
      await emptyCart();
      window.location.href = "/orders";
    }
  } catch (e) {
    console.log(e);
  }
};

export {
  addedToCart,
  getCartItems,
  decreaseQuantity,
  removeFromCart,
  emptyCart,
  orderItems,
};
