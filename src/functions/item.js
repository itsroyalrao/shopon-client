import axios from "axios";
import { url } from "./onMobile";

const addItem = async (title, imageURL, price, description) => {
  try {
    if (title === "" || imageURL === "" || price === "") {
      console.log("Provide Details");
    } else {
      const user = localStorage.getItem("user");

      await axios.post(`${url()}/add-product`, {
        user,
        title,
        imageURL,
        price,
        description,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const getItem = async (id, setItem) => {
  try {
    const response = await axios.get(`${url()}/products/${id}`);
    if (response.data.success) setItem(response.data.item);
  } catch (e) {
    console.log(e);
  }
};

const getItems = async (setItems) => {
  try {
    const response = await axios.get(`${url()}/products`);
    if (response.data.success) setItems(response.data.items);
    else setItems([]);
  } catch (e) {
    console.log(e);
  }
};

const updateItem = async (id, title, imageURL, price, description) => {
  try {
    const response = await axios.put(`${url()}/admin-products`, {
      id,
      title,
      imageURL,
      price,
      description,
    });
    console.log(response);
    if (response.data.success) window.location.href = "/admin/products";
  } catch (e) {
    console.log(e);
  }
};

const deleteItem = async (id, setItems) => {
  try {
    await axios.delete(`${url()}/admin-products?id=${id}`);
    getItems(setItems);
  } catch (e) {
    console.log(e);
  }
};

export { addItem, getItem, getItems, updateItem, deleteItem };
