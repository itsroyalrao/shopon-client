import { useEffect, useState } from "react";
import Header from "../components/Header";
import getCartItems from "../functions/getCartItems";
import addedToCart from "../functions/addedToCart";
import { decreaseQuantity, removeFromCart } from "../functions/removeFromCart";

function Cart() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    getCartItems(setItems);
  }, []);
  return (
    <>
      <Header />
      {items && items.length ? (
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
            {items.map((item) => {
              return (
                <div
                  className="w-full h-80 bg-[#484848] rounded flex flex-col items-center py-2 shadow shadow-gray-400 space-y-1"
                  key={item.itemID._id}
                >
                  <div className="text-xl capitalize px-2">
                    {item.itemID.title}
                  </div>
                  <img
                    className="w-full h-36"
                    src={`${item.itemID.imageURL}`}
                    alt={`${item.itemID.title}`}
                  />
                  <div className="flex items-center space-x-1 grow">
                    <i className="fas fa-rupee-sign" />
                    <div className=" text-xl">{item.itemID.price}</div>
                  </div>
                  <div className="px-2 overflow-hidden grow">
                    {item.itemID.description}
                  </div>
                  <div className="flex justify-center w-full space-x-2">
                    <div className="flex justify-between items-center">
                      <i
                        className="p-2 fas fa-minus border-2 border-[rgb(0,94,72)] hover:bg-[rgb(0,94,72)] rounded-s cursor-pointer"
                        onClick={() => {
                          decreaseQuantity(item.itemID._id);
                        }}
                      />
                      <div className="px-2 py-1 border-2 border-[rgb(0,94,72)] hover:bg-[rgb(0,94,72)] cursor-pointer">
                        {item.count}
                      </div>
                      <i
                        className="p-2 fas fa-plus border-2 border-[rgb(0,94,72)] hover:bg-[rgb(0,94,72)] rounded-e cursor-pointer"
                        onClick={() => {
                          addedToCart(item.itemID._id);
                        }}
                      />
                    </div>
                    <div
                      className="border-2 border-[rgb(0,94,72)] px-3 py-1 rounded hover:bg-[rgb(0,94,72)] cursor-pointer"
                      onClick={() => {
                        removeFromCart(item.itemID._id);
                      }}
                    >
                      Remove
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="grow flex justify-center items-center text-3xl">
          List is empty
        </div>
      )}
    </>
  );
}

export default Cart;
