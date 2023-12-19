import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { getUser } from "../functions/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  return (
    <div className="w-full h-[100dvh] md:min-h-screen flex items-center justify-center bg-[#202020] text-black">
      <div className="w-full sm:w-[64%] md:w-[48%] lg:w-[32%] h-full sm:h-[80%] flex flex-col items-center justify-center bg-white py-[10%] space-y-6 sm:rounded-2xl">
        <div className="flex justify-center text-4xl font-bold text-[rgb(0,94,72)]">
          ShopOn
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[80%] flex flex-col space-y-2">
            <div>
              <input
                type="email"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-[rgb(0,94,72)]"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="w-full flex justify-end">
                <Link className=" px-1 text-blue-500 text-lg">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-[rgb(0,94,72)]"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {message && (
              <div className="text-red-500 flex justify-center">{message}</div>
            )}
            <button
              className="w-full bg-[rgb(0,94,72)] flex justify-center py-2 rounded-lg text-white text-xl focus:scale-105"
              onClick={() => getUser(email, password, setMessage, navigate)}
            >
              Login
            </button>
            <div className="flex justify-center space-x-1">
              <span>Don&apos;t you have an account?</span>
              <Link to={"/signup"} className="font-bold text-blue-500">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  onMobile: PropTypes.any,
};

export default Login;
