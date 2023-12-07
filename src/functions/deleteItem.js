import axios from "axios";
import getItems from "./getItems";

const deleteItem = async (id, setItems) => {
  try {
    await axios.delete(
      `http://localhost:3000/admin-products?id=${id}` ||
        `https://shopon-backend-production.up.railway.app/admin-products?id=${id}`
    );
    getItems(setItems);
  } catch (e) {
    console.log(e);
  }
};

export default deleteItem;
