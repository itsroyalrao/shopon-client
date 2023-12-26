import axios from "axios";
import { url } from "./onMobile";

const addedToCart = async (
  email,
  id,
  title,
  imageURL,
  price,
  description,
  navigate
) => {
  try {
    if (email) {
      const response = await axios.post(`${url()}/auth/cart`, {
        user: email,
        id,
        title,
        imageURL,
        price,
        description,
      });
      if (response.data.success) navigate("/cart");
    } else {
      navigate("/login");
    }
  } catch (e) {
    console.log(e);
  }
};

const getCartItems = async (email, setItems, setTotal) => {
  try {
    const response = await axios.get(`${url()}/auth/cart?user=${email}`);

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

const increaseQuantity = async (email, id, navigate, setItems, setTotal) => {
  try {
    const response = await axios.post(`${url()}/auth/cart/increase`, {
      user: email,
      id,
    });
    if (response.data.success) {
      getCartItems(setItems, setTotal);
      navigate("/cart");
    }
  } catch (e) {
    console.log(e);
  }
};

const decreaseQuantity = async (email, id, navigate, setItems, setTotal) => {
  try {
    const response = await axios.post(`${url()}/auth/cart/decrease`, {
      user: email,
      id,
    });
    if (response.data.success) {
      getCartItems(setItems, setTotal);
      navigate("/cart");
    }
  } catch (e) {
    console.log(e);
  }
};

const removeFromCart = async (email, id, navigate) => {
  try {
    const response = await axios.delete(
      `${url()}/auth/cart/remove?user=${email}&id=${id}`
    );
    if (response.data.success) navigate("/cart");
  } catch (e) {
    console.log(e);
  }
};

const emptyCart = async (email) => {
  try {
    await axios.delete(`${url()}/auth/cart?user=${email}`);
  } catch (e) {
    console.log(e);
  }
};

const orderItems = async (email, items, navigate) => {
  try {
    const response = await axios.post(`${url()}/auth/orders`, { email, items });
    if (response.data.success) {
      emptyCart(email);
      navigate("/orders");
    }
  } catch (e) {
    console.log(e);
  }
};

export {
  addedToCart,
  getCartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  emptyCart,
  orderItems,
};
