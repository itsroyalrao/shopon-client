import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getOrderedItems, cancelOrders } from "../functions/orders";
import { isAuthorized } from "../functions/user";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    isAuthorized(navigate, email, setEmail);

    if (email) getOrderedItems(email, setItems);
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
                      <div className="px-2 py-1 border-2 border-[rgb(0,94,72)] hover:bg-[rgb(0,94,72)] cursor-pointer tracking-wide rounded">
                        {item.quantity} {item.quantity > 1 ? "Units" : "Unit"}
                      </div>
                      <div
                        className="border-2 border-red-500 hover:bg-red-500 px-3 py-1 rounded cursor-pointer"
                        onClick={() => {
                          cancelOrders(email, item.id, setItems);
                        }}
                      >
                        Cancel Order
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

export default Orders;
