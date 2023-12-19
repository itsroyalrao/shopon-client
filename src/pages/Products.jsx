import { useEffect, useState } from "react";
import Header from "../components/Header";
import { addedToCart } from "../functions/cart";
import { getItems } from "../functions/item";
import { useNavigate } from "react-router-dom";
import { isAuthorized } from "../functions/user";

function Products() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(false);
  // const [visitor, setVisitor] = useState(true);
  const [items, setItems] = useState(null);

  // useEffect(() => {
  //   getItems(setItems);
  // }, []);
  useEffect(() => {
    isAuthorized(navigate, email, setEmail);

    getItems(setItems);
  }, [email, navigate]);
  return (
    <>
      <Header email={email} />
      {items ? (
        items.length ? (
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
        )
      ) : (
        <div className="grow flex justify-center items-center text-2xl">
          Loading...
        </div>
      )}
    </>
  );
}

export default Products;
