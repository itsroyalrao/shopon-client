import axios from "axios";

async function getUser(email, password, setMessage) {
  try {
    if (!email) setMessage("Please provide Email address");
    else if (!password) setMessage("Please provide Password");
    else {
      localStorage.setItem("user", email);

      const response = await axios.post(
        // `http://localhost:3000/auth/login`
        `https://shopon-backend-production.up.railway.app/auth/login`,
        {
          email,
          password,
        }
      );
      if (response.data.success) window.location.href = "/";
      else setMessage(response.data.msg);
    }
  } catch (e) {
    console.log(e);
  }
}

export default getUser;
