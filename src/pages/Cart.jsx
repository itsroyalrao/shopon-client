import { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  getCartItems,
  decreaseQuantity,
  removeFromCart,
  increaseQuantity,
} from "../functions/cart";
import { useNavigate } from "react-router-dom";
import { isAuthorized } from "../functions/user";
import { displayRazorpay, loadRazorpay } from "../functions/payment";

function Cart() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [items, setItems] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    isAuthorized(navigate, email, setEmail);
    if (email) {
      loadRazorpay();
      getCartItems(email, setItems, setTotal);
    }
  }, [email, navigate]);
  return (
    <>
      <Header email={email} />
      {items ? (
        items.length ? (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 pb-20">
              {items.map((item) => {
                return (
                  <div
                    className="w-full h-80 bg-[#484848] rounded flex flex-col items-center py-2 shadow shadow-gray-400 space-y-1"
                    key={item.id}
                  >
                    <div className="text-xl capitalize px-2">{item.title}</div>
                    <img
                      className="w-full h-36"
                      src={`${item.imageURL}`}
                      alt={`${item.title}`}
                    />
                    <div className="flex items-center space-x-1 grow">
                      <i className="fas fa-rupee-sign" />
                      <div className=" text-xl">{item.price}</div>
                    </div>
                    <div className="px-2 overflow-hidden grow">
                      {item.description}
                    </div>
                    <div className="flex justify-center w-full space-x-2">
                      <div className="flex justify-between items-center">
                        <i
                          className="p-2 fas fa-minus border-2 border-[rgb(0,94,72)] hover:bg-[rgb(0,94,72)] rounded-s cursor-pointer"
                          onClick={() => {
                            decreaseQuantity(
                              email,
                              item.id,
                              setItems,
                              setTotal
                            );
                          }}
                        />
                        <div className="px-2 py-1 border-2 border-[rgb(0,94,72)] hover:bg-[rgb(0,94,72)] cursor-pointer">
                          {item.quantity}
                        </div>
                        <i
                          className="p-2 fas fa-plus border-2 border-[rgb(0,94,72)] hover:bg-[rgb(0,94,72)] rounded-e cursor-pointer"
                          onClick={() => {
                            increaseQuantity(
                              email,
                              item.id,
                              setItems,
                              setTotal
                            );
                          }}
                        />
                      </div>
                      <div
                        className="border-2 border-red-500 hover:bg-red-500 px-3 py-1 rounded cursor-pointer"
                        onClick={() => {
                          removeFromCart(email, item.id, navigate);
                        }}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full flex items-center px-5 py-2 lg:px-12 fixed bottom-0 bg-[rgb(0,94,72)]">
              <div className="grow flex justify-center text-xl">
                Total = Rs {total}
              </div>
              <div className="grow"></div>
              <div
                className="bg-blue-600 px-5 py-3 tracking-wider rounded cursor-pointer"
                onClick={async () => {
                  await displayRazorpay(email, total, items, navigate);
                }}
              >
                PLACE ORDER
              </div>
            </div>
          </>
        ) : (
          <div className="grow flex justify-center items-center">
            <i
              className="fa-sharp fa-solid fa-folder-open text-6xl"
              title="Cart is empty"
            ></i>
          </div>
        )
      ) : (
        <div className="grow flex justify-center items-center text-2xl">
          Loading...
        </div>
      )}
    </>
  );
}

export default Cart;
