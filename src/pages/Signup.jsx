import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../functions/user";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  return (
    <div className="w-full h-[100dvh] md:min-h-screen flex items-center justify-center bg-[#202020] text-black">
      <div className="w-full sm:w-[64%] md:w-[48%] lg:w-[32%] h-full sm:h-[80%] flex flex-col items-center justify-center bg-white py-[10%] space-y-6 sm:rounded-2xl">
        <div className="flex justify-center text-4xl font-bold text-[rgb(0,94,72)]">
          ShopOn
        </div>
        <div className="w-full flex flex-col items-center pb-4">
          <div className="w-[80%] flex flex-col space-y-2">
            <div className="space-y-1">
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-[rgb(0,94,72)]"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="on"
              />
              <input
                type="email"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-[rgb(0,94,72)]"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="on"
              />
              <input
                type="password"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-[rgb(0,94,72)]"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-[rgb(0,94,72)]"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {message && (
              <div className="text-red-500 flex justify-center">{message}</div>
            )}
            <button
              className="w-full bg-[rgb(0,94,72)] flex justify-center py-2 rounded-lg text-white text-xl focus:scale-105"
              onClick={() => {
                addUser(
                  username,
                  email,
                  password,
                  confirmPassword,
                  setMessage,
                  navigate
                );
              }}
            >
              Sign up
            </button>
            <div className="flex justify-center space-x-1">
              <span>Already have an account?</span>
              <Link to={"/login"} className="font-bold text-blue-500">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  onMobile: PropTypes.any,
};

export default Signup;
