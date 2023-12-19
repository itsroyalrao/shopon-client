import axios from "axios";
import { url } from "./onMobile";

const getOrderedItems = async (email, setItems) => {
  try {
    const response = await axios.get(`${url()}/auth/orders?user=${email}`);

    if (response.data.success) setItems(response.data.orders);
    else setItems([]);
  } catch (e) {
    console.log(e);
  }
};

const cancelOrders = async (email, id, setItems) => {
  try {
    await axios.delete(`${url()}/auth/orders?user=${email}&id=${id}`);
    getOrderedItems(email, setItems);
  } catch (e) {
    console.log(e);
  }
};

export { getOrderedItems, cancelOrders };
