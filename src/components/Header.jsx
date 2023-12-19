import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { onMobile } from "../functions/onMobile";
import MobileView from "./MobileView";

function Header() {
  const loc = useLocation();
  const pageName = loc.pathname.replace("/", "");

  const [clicked, setClicked] = useState(false);

  return (
    <>
      {onMobile() ? (
        <MobileView clicked={clicked} setClicked={setClicked} />
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
                {/* <Link
                  to={"/contact-us"}
                  className={`hover:text-yellow-400 ${
                    pageName === "contact-us" ? "text-yellow-400" : ""
                  }`}
                >
                  Contact Us
                </Link> */}
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to={"/login"}
                className="bg-red-500 px-4 py-2 rounded"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Logout
              </Link>
            </div>
          </div>
          <div className="lg:hidden px-4 bg-[rgb(0,94,72)]">
            <MobileView clicked={clicked} setClicked={setClicked} />
          </div>
        </>
      )}
    </>
  );
}

export default Header;
