import { Link, useLocation } from "react-router-dom";
import onMobile from "../functions/onMobile";
import { useState } from "react";

function Header() {
  const loc = useLocation();
  const pageName = loc.pathname.replace("/", "");

  const [clicked, setClicked] = useState(false);

  return (
    <>
      {onMobile ? (
        <div className="flex justify-between items-center bg-[rgb(0,94,72)] px-5 py-3 sticky top-0 text-lg">
          <div className="text-xl font-bold">ShopOn</div>
          <div className="flex flex-col items-center pr-2">
            <i
              className={
                clicked ? "fas fa-times scale-125" : "fas fa-bars scale-125"
              }
              onClick={() => setClicked(!clicked)}
            />
            {clicked && (
              <div className="w-[75%] h-full flex flex-col space-y-2 fixed top-[52px] right-0 bg-[#121212] p-3">
                <div className="flex items-center space-x-2 p-2 rounded">
                  <i className="fas fa-home" />
                  <div className="capitalize">Home</div>
                </div>

                <div className="flex items-center space-x-2 p-2 rounded">
                  <i className="fas fa-tag" />
                  <div className="capitalize">Products</div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded">
                  <i className="fas fa-shopping-cart" />
                  <div className="capitalize">Cart</div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded">
                  <i className="fas fa-clipboard-list" />
                  <div className="capitalize">Orders</div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded">
                  <i className="fas fa-plus-circle" />
                  <div className="capitalize">Add Product</div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded">
                  <i className="fas fa-shopping-bag" />
                  <div className="capitalize">Admin Products</div>
                </div>
                <div className="text-[whitesmoke] bg-red-600 px-3 py-2 rounded active:bg-red-700">
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center bg-[rgb(0,94,72)] px-9 sticky top-0 text-lg">
          <div>
            <div className="flex space-x-9 py-4">
              <Link
                to={"/"}
                className={`hover:text-yellow-400 ${
                  pageName === "" ? "text-yellow-400" : ""
                }`}
              >
                ShopOn
              </Link>
              <Link
                to={"/products"}
                className={`hover:text-yellow-400 ${
                  pageName === "products" ? "text-yellow-400" : ""
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
      )}
    </>
  );
}

export default Header;
