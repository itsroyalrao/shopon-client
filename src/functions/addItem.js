import axios from "axios";

const addItem = async (title, imageURL, price, description) => {
  try {
    const user = localStorage.getItem("user");

    const response = await axios.post(
      // `http://localhost:3000/add-product`,
      `https://shopon-backend-production.up.railway.app/add-product`,
      {
        user,
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
