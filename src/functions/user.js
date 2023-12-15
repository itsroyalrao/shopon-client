import axios from "axios";

async function addUser(username, email, password, confirmPassword, setMessage) {
  try {
    if (!username) setMessage("Please provide Username");
    else if (!email) setMessage("Please provide Email address");
    else if (!password) setMessage("Please provide Password");
    else if (password !== confirmPassword) setMessage("Password doesn't match");
    else {
      localStorage.setItem("user", email);

      const response = await axios.post(
        // `http://localhost:3000/auth/signup`,
        `https://shopon-backend-production.up.railway.app/auth/signup`,
        {
          username,
          email,
          password,
        }
      );
      console.log(response);
      if (response.data.success) window.location.href = "/";
      else setMessage(response.data.msg);
    }
  } catch (e) {
    console.log(e);
  }
}

async function getUser(email, password, setMessage) {
  try {
    if (!email) setMessage("Please provide Email address");
    else if (!password) setMessage("Please provide Password");
    else {
      localStorage.setItem("user", email);

      const response = await axios.post(
        // `http://localhost:3000/auth/login`,
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

export { addUser, getUser };
