import axios from "axios";
import { url } from "./onMobile";

const setCookies = async (email, navigate) => {
  try {
    const response = await axios.get(`${url()}/auth/cookies?email=${email}`);
    if (response.data.success) {
      document.cookie = `accessToken=${response.data.tokens.accessToken}`;
      document.cookie = `refreshToken=${response.data.tokens.refreshToken}`;
      navigate("/");
    }
  } catch (e) {
    console.log(e);
  }
};

const isAuthorized = async (navigate, email, setEmail) => {
  const cookies = {};
  document.cookie.split("; ").forEach((cookie) => {
    const temp = cookie.split("=");
    cookies[temp[0]] = temp[1];
  });

  const response = await axios.post(`${url()}/cookies`, cookies);
  if (response.data.success) {
    setEmail(response.data.email);
  } else if (email !== false) {
    navigate("/login");
  }
};

async function addUser(
  username,
  email,
  password,
  confirmPassword,
  setMessage,
  navigate
) {
  try {
    if (!username) setMessage("Please provide Username");
    else if (!email) setMessage("Please provide Email address");
    else if (!password) setMessage("Please provide Password");
    else if (password !== confirmPassword) setMessage("Password doesn't match");
    else {
      const response = await axios.post(`${url()}/auth/signup`, {
        username,
        email,
        password,
      });
      if (response.data.success) navigate("/login");
      else setMessage(response.data.msg);
    }
  } catch (e) {
    console.log(e);
  }
}

async function getUser(email, password, setMessage, navigate) {
  try {
    if (!email) setMessage("Please provide Email address");
    else if (!password) setMessage("Please provide Password");
    else {
      const response = await axios.post(`${url()}/auth/login`, {
        email,
        password,
      });
      if (response.data.success) await setCookies(email, navigate);
      else setMessage(response.data.msg);
    }
  } catch (e) {
    console.log(e);
  }
}

async function getUserDetails(email, setUsername) {
  try {
    const response = await axios.get(
      `${url()}/auth/userdetails?email=${email}`
    );
    if (response.data.success) setUsername(response.data.user.username);
  } catch (e) {
    console.log(e);
  }
}

async function logoutUser(navigate) {
  try {
    document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}

export {
  setCookies,
  isAuthorized,
  addUser,
  getUser,
  getUserDetails,
  logoutUser,
};
