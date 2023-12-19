import axios from "axios";
import { url } from "./onMobile";

const getOrderedItems = async (setItems) => {
  try {
    const user = localStorage.getItem("user");

    const response = await axios.get(`${url()}/auth/orders?user=${user}`);

    if (response.data.success) setItems(response.data.orders);
    else setItems([]);
  } catch (e) {
    console.log(e);
  }
};

const cancelOrders = async (id, setItems) => {
  try {
    const user = localStorage.getItem("user");
    await axios.delete(`${url()}/auth/orders?user=${user}&id=${id}`);
    getOrderedItems(setItems);
  } catch (e) {
    console.log(e);
  }
};

export { getOrderedItems, cancelOrders };
