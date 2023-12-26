import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import Header from "../components/Header";
import { getItems } from "../functions/item";
import { useNavigate } from "react-router-dom";
import { isAuthorized } from "../functions/user";
import { getApiProducts } from "../apis/shopAPIs";
import { addedToCart } from "../functions/cart";
import { removeProducts } from "../features/home/shopSlice";

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.shop.products);
  const email = useSelector((state) => state.auth.email);

  useEffect(() => {
    isAuthorized(navigate, email);
    getItems(dispatch);
  }, [email, dispatch, navigate]);

  useEffect(() => {
    getApiProducts(dispatch);
    return () => {
      dispatch(removeProducts());
    };
  }, [dispatch]);
  return (
    <>
      <Header email={email} />
      <>
        {products.length ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
              {products.map((item) => {
                return (
                  <div
                    className="w-full bg-[#484848] rounded flex flex-col items-center pb-2 shadow shadow-gray-400 space-y-2"
                    key={nanoid()}
                  >
                    <img
                      className="w-full h-36 rounded-t"
                      src={`${item.imageURL}`}
                      alt={`${item.title}`}
                    />
                    <div className="w-full text-lg capitalize px-2 truncate overflow-hidden">
                      {item.title}
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-rupee-sign" />
                      <div className=" text-xl">{item.price}</div>
                    </div>
                    {/* <div className="px-2 overflow-hidden grow">
                      {item.description}
                    </div> */}
                    <div className="flex justify-center w-full space-x-2">
                      <div className="border-2 border-[rgb(0,94,72)] px-3 py-1 rounded hover:bg-[rgb(0,94,72)] cursor-pointer">
                        Details
                      </div>
                      <div
                        className="border-2 border-[rgb(0,94,72)] px-3 py-1 rounded hover:bg-[rgb(0,94,72)] cursor-pointer"
                        onClick={() => {
                          addedToCart(
                            email,
                            item._id,
                            item.title,
                            item.imageURL,
                            item.price,
                            item.description,
                            navigate
                          );
                        }}
                      >
                        Add to Cart
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="grow flex justify-center items-center text-3xl">
            <i
              className="fa-sharp fa-solid fa-folder-open text-6xl"
              title="List is empty"
            ></i>
          </div>
        )}
      </>
    </>
  );
}

export default Products;
