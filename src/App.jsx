import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";
import AdminProducts from "./pages/AdminProducts";
import UpdateProduct from "./pages/UpdateProduct";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col w-full min-h-[100svh] bg-[#242424] text-white relative">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/"} element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            {/* <Route path="/contact-us" element={<ContactUs />} /> */}
            <Route path={`/update-product/:id`} element={<UpdateProduct />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
