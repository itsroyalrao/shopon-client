import { useEffect, useState } from "react";
import Header from "../components/Header";
import { addedToCart } from "../functions/cart";
import { getItems } from "../functions/item";

function Products() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) window.location.href = "/login";
    else getItems(setItems);
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
                  key={item._id}
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
                    <div className="border-2 border-[rgb(0,94,72)] px-3 py-1 rounded hover:bg-[rgb(0,94,72)] cursor-pointer">
                      Details
                    </div>
                    <div
                      className="border-2 border-[rgb(0,94,72)] px-3 py-1 rounded hover:bg-[rgb(0,94,72)] cursor-pointer"
                      onClick={() => {
                        addedToCart(
                          item._id,
                          item.title,
                          item.imageURL,
                          item.price,
                          item.description
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
          List is empty
        </div>
      )}
    </>
  );
}

export default Products;
