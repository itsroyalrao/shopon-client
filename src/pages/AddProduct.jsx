import { useEffect, useState } from "react";
import Header from "../components/Header";
import { onMobile } from "../functions/onMobile";
import { addItem } from "../functions/item";
import { useNavigate } from "react-router-dom";
import { isAuthorized } from "../functions/user";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    isAuthorized(navigate, email, setEmail);
  }, [email, navigate]);

  return (
    <>
      <Header email={email} />
      {email ? (
        <div className="w-full flex justify-center py-9">
          <div
            className={
              onMobile()
                ? "w-[80%] space-y-3"
                : "w-[80%] sm:w-[60%] md:w-[40%] lg:w-[25%] space-y-3"
            }
          >
            <div className="w-full space-y-1">
              <div>Title</div>
              <input
                type="text"
                className="w-full px-3 py-1 bg-[#484848] rounded"
                autoFocus
                value={title}
                onChange={(e) => {
                  setMessage(null);
                  setTitle(e.target.value);
                  setImageURL(
                    `https://source.unsplash.com/random?${e.target.value}`
                  );
                }}
              />
            </div>
            <div className="w-full space-y-1">
              <div>Image URL</div>
              <input
                type="text"
                className="w-full px-3 py-1 bg-[#484848] rounded"
                value={imageURL}
                onChange={(e) => {
                  setMessage(null);
                  setImageURL(e.target.value);
                }}
              />
            </div>
            <div className="w-full space-y-1">
              <div>Price</div>
              <input
                type="number"
                className="w-full px-3 py-1 bg-[#484848] rounded"
                value={price}
                onChange={(e) => {
                  setMessage(null);
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="w-full space-y-1">
              <div>Description</div>
              <textarea
                rows="4"
                className="w-full px-3 py-1 bg-[#484848] rounded"
                value={description}
                onChange={(e) => {
                  setMessage(null);
                  setDescription(e.target.value);
                }}
              />
            </div>
            {message && (
              <div className="flex justify-center text-red-600 text-lg">
                {message}
              </div>
            )}
            <div
              className={
                onMobile
                  ? `bg-[rgb(0,94,72)] flex justify-center text-lg py-1 rounded`
                  : `border-2 border-[rgb(0,94,72)] flex justify-center text-lg py-1 rounded hover:bg-[rgb(0,94,72)] cursor-pointer`
              }
              onClick={() => {
                addItem(
                  email,
                  title,
                  imageURL,
                  price,
                  description,
                  setMessage,
                  navigate
                );
              }}
            >
              Add Product
            </div>
          </div>
        </div>
      ) : (
        <div className="grow flex justify-center items-center text-3xl">
          Loading...
        </div>
      )}
    </>
  );
}

export default AddProduct;
