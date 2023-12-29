import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MobileView from "./MobileView";
import { onMobile } from "../functions/onMobile";
import { getUserDetails, logoutUser } from "../functions/user";

function Header({ email }) {
  const loc = useLocation();
  const pageName = loc.pathname.replace("/", "");
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (email) getUserDetails(email, setUsername);
  }, [email]);
  return (
    <>
      {onMobile() ? (
        <MobileView
          clicked={clicked}
          setClicked={setClicked}
          email={email}
          username={username}
          navigate={navigate}
        />
      ) : (
        <>
          <div className="hidden lg:flex justify-between items-center bg-[rgb(0,94,72)] px-9 sticky top-0 text-lg">
            <div className="flex items-center space-x-9">
              <Link to={"/"} className="text-xl font-bold">
                ShopOn
              </Link>
              <div className="flex space-x-9 py-4">
                <Link
                  to={"/"}
                  className={`hover:text-yellow-400 ${
                    pageName === "" ? "text-yellow-400" : ""
                  }`}
                >
                  Products
                </Link>
                <Link
                  to={"/cart"}
                  className={`hover:text-yellow-400 ${
                    pageName === "cart" ? "text-yellow-400" : ""
                  }`}
                >
                  Cart
                </Link>
                <Link
                  to={"/orders"}
                  className={`hover:text-yellow-400 ${
                    pageName === "orders" ? "text-yellow-400" : ""
                  }`}
                >
                  Orders
                </Link>
                <Link
                  to={"/admin/add-product"}
                  className={`hover:text-yellow-400 ${
                    pageName === "admin/add-product" ? "text-yellow-400" : ""
                  }`}
                >
                  Add Product
                </Link>
                <Link
                  to={"/admin/products"}
                  className={`hover:text-yellow-400 ${
                    pageName === "admin/products" ? "text-yellow-400" : ""
                  }`}
                >
                  Admin Products
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {email ? (
                <>
                  {username && <div className="px-4">{username}</div>}
                  <div
                    className="bg-red-500 px-4 py-2 rounded cursor-pointer"
                    onClick={() => logoutUser(navigate)}
                  >
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to={"/signup"}
                    className="bg-blue-600 px-4 py-2 rounded"
                  >
                    Register
                  </Link>
                  <Link
                    to={"/login"}
                    className="px-4 py-2 rounded hover:bg-white hover:text-[rgb(0,94,72)] hover:font-bold"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="lg:hidden px-4 bg-[rgb(0,94,72)] sticky top-0">
            <MobileView
              clicked={clicked}
              setClicked={setClicked}
              email={email}
              username={username}
              navigate={navigate}
            />
          </div>
        </>
      )}
    </>
  );
}

Header.propTypes = {
  email: PropTypes.any,
};

export default Header;
