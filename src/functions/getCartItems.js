import axios from "axios";

const getCartItems = async (setItems) => {
  try {
    const user = localStorage.getItem("user");

    // const response = await axios.get(
    //   `http://localhost:3000/cart`
    //   // `https://shopon-backend-production.up.railway.app/cart`
    // );
    const response = await axios.get(
      `http://localhost:3000/auth/cart?user=${user}`
      // `https://shopon-backend-production.up.railway.app/auth/cart?user=${user}`
    );
    console.log(response);
    // if (response.data.success) setItems(response.data.items);
  } catch (e) {
    console.log(e);
  }
};

export default getCartItems;
