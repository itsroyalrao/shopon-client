import axios from "axios";

const getItem = async (id, setItem) => {
  try {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    if (response.data.success) setItem(response.data.item);
  } catch (e) {
    console.log(e);
  }
};

export default getItem;
