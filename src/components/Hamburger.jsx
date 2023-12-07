import { Link } from "react-router-dom";

function Hamburger() {
  return (
    <div className="w-[75%] h-full flex flex-col space-y-2 fixed top-[52px] right-0 bg-[#202020] p-3">
      <Link to={"/"} className="flex items-center space-x-2 p-2 rounded">
        <i className="fas fa-home" />
        <div className="capitalize">Home</div>
      </Link>
      <Link
        to={"/products"}
        className="flex items-center space-x-2 p-2 rounded"
      >
        <i className="fas fa-tag" />
        <div className="capitalize">Products</div>
      </Link>
      <Link to={"/cart"} className="flex items-center space-x-2 p-2 rounded">
        <i className="fas fa-shopping-cart" />
        <div className="capitalize">Cart</div>
      </Link>
      <Link to={"/orders"} className="flex items-center space-x-2 p-2 rounded">
        <i className="fas fa-clipboard-list" />
        <div className="capitalize">Orders</div>
      </Link>
      <Link
        to={"/admin/add-product"}
        className="flex items-center space-x-2 p-2 rounded"
      >
        <i className="fas fa-plus-circle" />
        <div className="capitalize">Add Product</div>
      </Link>
      <Link
        to={"/admin/products"}
        className="flex items-center space-x-2 p-2 rounded"
      >
        <i className="fas fa-shopping-bag" />
        <div className="capitalize">Admin Products</div>
      </Link>
      <Link
        to={"/login"}
        className="flex justify-center text-[whitesmoke] bg-red-600 px-3 py-2 rounded active:bg-red-700"
      >
        Logout
      </Link>
    </div>
  );
}

export default Hamburger;
