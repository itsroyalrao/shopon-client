import axios from "axios";

const addItem = async (title, imageURL, price, description) => {
  try {
    const response = await axios.post(
      // `http://localhost:3000/add-product`,
      `https://shopon-backend-production.up.railway.app/add-product`,
      {
        title,
        imageURL,
        price,
        description,
      }
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export default addItem;
