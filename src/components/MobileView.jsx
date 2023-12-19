import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MobileView({ clicked, setClicked, email, username }) {
  return (
    <div className="flex justify-between items-center bg-[rgb(0,94,72)] px-5 py-4 sticky top-0 text-lg">
      <Link to={"/"} className="text-xl font-bold">
        ShopOn
      </Link>
      <div className="flex flex-col items-center pr-2">
        <i
          className={
            clicked ? "fas fa-times scale-125" : "fas fa-bars scale-125"
          }
          onClick={() => setClicked(!clicked)}
        />
        {clicked && (
          <div className="w-[75%] h-full flex flex-col space-y-2 fixed top-[60px] right-0 bg-[#121212] p-3">
            {username && <div className="">{username}</div>}
            <Link to={"/"} className="flex items-center space-x-2 p-2">
              <i className="fas fa-tag" />
              <div className="">Products</div>
            </Link>
            <Link to={"/cart"} className="flex items-center space-x-2 p-2">
              <i className="fas fa-shopping-cart" />
              <div className="">Cart</div>
            </Link>
            <Link to={"/orders"} className="flex items-center space-x-2 p-2">
              <i className="fas fa-clipboard-list" />
              <div className="">Orders</div>
            </Link>
            <Link
              to={"/admin/add-product"}
              className="flex items-center space-x-2 p-2"
            >
              <i className="fas fa-plus-circle" />
              <div className="">Add Product</div>
            </Link>
            <Link
              to={"/admin/products"}
              className="flex items-center space-x-2 p-2"
            >
              <i className="fas fa-shopping-bag" />
              <div className="">Admin Products</div>
            </Link>
            {/* <Link
              to={"/contact-us"}
              className="flex items-center space-x-2 p-2"
            >
              <i className="fas fa-phone" />
              <div className="">Contact Us</div>
            </Link> */}
            <div className=" flex items-center space-x-1">
              {email ? (
                <>
                  <Link
                    to={"/login"}
                    className="w-full flex justify-center bg-red-500 py-2 rounded"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={"/signup"}
                    className="w-full flex justify-center bg-blue-600 px-4 py-2 rounded"
                  >
                    Register
                  </Link>
                  <Link
                    to={"/login"}
                    className="w-full flex justify-center bg-[rgb(0,94,72)] px-4 py-2 rounded"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

MobileView.propTypes = {
  clicked: PropTypes.bool,
  setClicked: PropTypes.func,
  email: PropTypes.any,
  username: PropTypes.string,
};

export default MobileView;
