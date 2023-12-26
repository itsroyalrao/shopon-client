import axios from "axios";
import { url } from "./onMobile";
import { setCustomProducts } from "../features/home/shopSlice";

const addItem = async (
  email,
  title,
  imageURL,
  price,
  description,
  setMessage,
  navigate
) => {
  try {
    if (title === "") setMessage("Please provide title");
    else if (imageURL === "") setMessage("Please provide image URL");
    else if (price <= 1) setMessage("Price is invalid");
    else {
      const response = await axios.post(`${url()}/add-product`, {
        user: email,
        title,
        imageURL,
        price,
        description,
      });
      if (response.data.success) navigate("/");
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

const getItems = async (dispatch) => {
  try {
    const response = await axios.get(`${url()}/products`);
    console.log(response);
    // if (response.data.success) setItems(response.data.items);
    if (response.data.success) dispatch(setCustomProducts(response.data.items));
    // else setItems([]);
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

const deleteItem = async (email, id, setItems) => {
  try {
    await axios.delete(`${url()}/admin-products?id=${id}`);
    getAdminItems(email, setItems);
  } catch (e) {
    console.log(e);
  }
};

export { addItem, getItem, getItems, getAdminItems, updateItem, deleteItem };
