import axios from "axios";

const addItem = async (title, imageURL, price, description) => {
  try {
    if (title === "" || imageURL === "" || price === "") {
      console.log("Provide Details");
    } else {
      const user = localStorage.getItem("user");

      await axios.post(
        // `http://localhost:3000/add-product`,
        // `https://shopon-backend-production.up.railway.app/add-product`,
        `https://shopon.cyclic.app/add-product`,
        {
          user,
          title,
          imageURL,
          price,
          description,
        }
      );
    }
  } catch (e) {
    console.log(e);
  }
};

const getItem = async (id, setItem) => {
  try {
    const response = await axios.get(
      // `http://localhost:3000/products/${id}`
      // `https://shopon-backend-production.up.railway.app/products/${id}`
      `https://shopon.cyclic.app/products/${id}`
    );
    if (response.data.success) setItem(response.data.item);
  } catch (e) {
    console.log(e);
  }
};

const getItems = async (setItems) => {
  try {
    const response = await axios.get(
      // `http://localhost:3000/products`
      // `https://shopon-backend-production.up.railway.app/products`
      `https://shopon.cyclic.app/products`
    );
    if (response.data.success) setItems(response.data.items);
  } catch (e) {
    console.log(e);
  }
};

const updateItem = async (id, title, imageURL, price, description) => {
  try {
    const response = await axios.put(
      // `http://localhost:3000/admin-products`,
      // `https://shopon-backend-production.up.railway.app/admin-products`,
      `https://shopon.cyclic.app/admin-products`,
      {
        id,
        title,
        imageURL,
        price,
        description,
      }
    );
    console.log(response);
    if (response.data.success) window.location.href = "/admin/products";
  } catch (e) {
    console.log(e);
  }
};

const deleteItem = async (id, setItems) => {
  try {
    await axios.delete(
      // `http://localhost:3000/admin-products?id=${id}`
      // `https://shopon-backend-production.up.railway.app/admin-products?id=${id}`
      `https://shopon.cyclic.app/admin-products?id=${id}`
    );
    getItems(setItems);
  } catch (e) {
    console.log(e);
  }
};

export { addItem, getItem, getItems, updateItem, deleteItem };
