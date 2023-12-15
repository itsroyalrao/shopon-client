import axios from "axios";

const addItem = async (title, imageURL, price, description) => {
  try {
    if (title === "" || imageURL === "" || price === "") {
      console.log("Provide Details");
    } else {
      const user = localStorage.getItem("user");

      await axios.post(
        // `http://localhost:3000/add-product`
        `https://shopon-backend-production.up.railway.app/add-product`,
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

export default addItem;
