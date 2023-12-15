import axios from "axios";

const updateItem = async (id, title, imageURL, price, description) => {
  try {
    const response = await axios.put(
      // `http://localhost:3000/admin-products`
      `https://shopon-backend-production.up.railway.app/admin-products`,
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

export default updateItem;
