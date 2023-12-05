import { Link, useLocation } from "react-router-dom";

function Header() {
  const loc = useLocation();
  const pageName = loc.pathname.replace("/", "");

  return (
    <div className="bg-[rgb(0,94,72)] px-9 py-4 flex space-x-9 text-lg sticky top-0">
      <Link
        to={"/"}
        className={`hover:text-yellow-400 ${
          pageName === "" ? "text-yellow-400" : ""
        }`}
      >
        Shop
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
  );
}

export default Header;
