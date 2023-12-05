import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";
import AdminProducts from "./pages/AdminProducts";
import Header from "./components/Header";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  return (
    <Router>
      <div className="flex flex-col w-full min-h-[100svh] bg-[#242424] text-white relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path={`/update-product/:id`} element={<UpdateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
