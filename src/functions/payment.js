import axios from "axios";
import { url } from "./onMobile";
import { orderItems } from "./cart";

const loadRazorpay = async () => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  document.body.appendChild(script);
};

const displayRazorpay = async (email, total, orders, navigate) => {
  try {
    if (window.Razorpay) {
      const response = await axios.get(`${url()}/payment`);
      const orderId = response.data.order.id;

      const options = {
        key: "rzp_test_Ve5p1kxj1KyjSf",
        amount: total * 100,
        currency: "INR",
        name: "ShopOn",
        description: "Purchase description",
        image: "icons/expenses.png",
        order_id: response,
        handler: async function (response) {
          await axios.post(`${url()}/payment`, {
            email,
            paymentId: response.razorpay_payment_id,
            orderId,
            orders,
          });
          await orderItems(email, orders, navigate);
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert("Razorpay is not loaded yet. Please wait a moment and try again.");
    }
  } catch (e) {
    console.log(e);
  }
};

export { loadRazorpay, displayRazorpay };
