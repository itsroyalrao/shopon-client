import axios from "axios";
import { url } from "./onMobile";

const addItem = async (email, title, imageURL, price, description) => {
  try {
    if (title === "" || imageURL === "" || price === "") {
      console.log("Provide Details");
    } else {
      await axios.post(`${url()}/add-product`, {
        user: email,
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

const getAdminItems = async (email, setItems) => {
  try {
    const response = await axios.get(`${url()}/products?email=${email}`);
    if (response.data.success) setItems(response.data.items);
    else setItems([]);
  } catch (e) {
    console.log(e);
  }
};

const updateItem = async (
  id,
  title,
  imageURL,
  price,
  description,
  navigate
) => {
  try {
    const response = await axios.put(`${url()}/admin-products`, {
      id,
      title,
      imageURL,
      price,
      description,
    });
    if (response.data.success) navigate("/admin/products");
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

export { addItem, getItem, getItems, getAdminItems, updateItem, deleteItem };
