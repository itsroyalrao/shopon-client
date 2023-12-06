import axios from "axios";

const getItems = async (setItems) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/products`
      // `https://shopon-backend-production.up.railway.app/products`
    );
    if (response.data.success) setItems(response.data.items);
  } catch (e) {
    console.log(e);
  }
};

export default getItems;
