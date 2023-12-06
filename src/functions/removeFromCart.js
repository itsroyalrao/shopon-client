import axios from "axios";

const decreaseQuantity = async (id) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/cart/remove`,
      // `https://shopon-backend-production.up.railway.app/cart/remove`,
      {
        id,
      }
    );
    if (response.data.success) window.location.href = "/cart";
  } catch (e) {
    console.log(e);
  }
};

const removeFromCart = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/cart/remove?id=${id}`
    );
    if (response.data.success) window.location.href = "/cart";
  } catch (e) {
    console.log(e);
  }
};

const emptyCart = async () => {
  try {
    const user = localStorage.getItem("user");

    await axios.delete(`http://localhost:3000/cart/empty?user=${user}`);
  } catch (e) {
    console.log(e);
  }
};

export { decreaseQuantity, removeFromCart, emptyCart };
