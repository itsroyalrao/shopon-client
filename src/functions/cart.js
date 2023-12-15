import axios from "axios";

const user = localStorage.getItem("user");

const addedToCart = async (id, title, imageURL, price, description) => {
  try {
    const response = await axios.post(
      // `http://localhost:3000/auth/cart`,
      `https://shopon-backend-production.up.railway.app/auth/cart`,
      { user, id, title, imageURL, price, description }
    );
    if (response.data.success) window.location.href = "/cart";
  } catch (e) {
    console.log(e);
  }
};

const getCartItems = async (setItems) => {
  try {
    const user = localStorage.getItem("user");

    const response = await axios.get(
      // `http://localhost:3000/auth/cart?user=${user}`
      `https://shopon-backend-production.up.railway.app/auth/cart?user=${user}`
    );
    if (response.data.success) setItems(response.data.items);
  } catch (e) {
    console.log(e);
  }
};

const decreaseQuantity = async (id) => {
  try {
    const response = await axios.post(
      // `http://localhost:3000/auth/cart/decrease`,
      `https://shopon-backend-production.up.railway.app/auth/cart/decrease`,
      { user, id }
    );
    if (response.data.success) window.location.href = "/cart";
  } catch (e) {
    console.log(e);
  }
};

const removeFromCart = async (id) => {
  try {
    const response = await axios.delete(
      // `http://localhost:3000/auth/cart/remove?user=${user}&id=${id}`
      `https://shopon-backend-production.up.railway.app/auth/cart/remove?user=${user}&id=${id}`
    );
    if (response.data.success) window.location.href = "/cart";
  } catch (e) {
    console.log(e);
  }
};

const emptyCart = async () => {
  try {
    const user = localStorage.getItem("user");

    await axios.delete(
      // `http://localhost:3000/auth/cart?user=${user}`
      `https://shopon-backend-production.up.railway.app/auth/cart?user=${user}`
    );
  } catch (e) {
    console.log(e);
  }
};

const orderItems = async (items) => {
  try {
    const user = localStorage.getItem("user");
    const response = await axios.post(
      // `http://localhost:3000/auth/orders`,
      `https://shopon-backend-production.up.railway.app/auth/orders`,
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

export {
  addedToCart,
  getCartItems,
  decreaseQuantity,
  removeFromCart,
  emptyCart,
  orderItems,
};
