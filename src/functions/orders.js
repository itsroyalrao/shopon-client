import axios from "axios";

const getOrderedItems = async (setItems) => {
  try {
    const user = localStorage.getItem("user");

    const response = await axios.get(
      // `http://localhost:3000/auth/orders?user=${user}`
      // `https://shopon-backend-production.up.railway.app/auth/orders?user=${user}`
      `https://shopon.cyclic.app/auth/orders?user=${user}`
    );
    setItems(response.data.orders);
  } catch (e) {
    console.log(e);
  }
};

const cancelOrders = async (id, setItems) => {
  try {
    const user = localStorage.getItem("user");
    await axios.delete(
      // `http://localhost:3000/auth/orders?user=${user}&id=${id}`
      `https://shopon-backend-production.up.railway.app/auth/orders?user=${user}&id=${id}`
      // `https://shopon.cyclic.app/auth/orders?user=${user}&id=${id}`
    );
    getOrderedItems(setItems);
  } catch (e) {
    console.log(e);
  }
};

export { getOrderedItems, cancelOrders };
