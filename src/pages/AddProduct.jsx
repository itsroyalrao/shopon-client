import { useState } from "react";
import addItem from "../functions/addItem";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="w-full flex justify-center py-9">
      <div className="w-[40%] lg:w-[25%] space-y-3">
        <div className="w-full space-y-1">
          <div>Title</div>
          <input
            type="text"
            className="w-full px-3 py-1 bg-[#484848] rounded"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full space-y-1">
          <div>Image URL</div>
          <input
            type="text"
            className="w-full px-3 py-1 bg-[#484848] rounded"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div className="w-full space-y-1">
          <div>Price</div>
          <input
            type="number"
            className="w-full px-3 py-1 bg-[#484848] rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-full space-y-1">
          <div>Description</div>
          <textarea
            cols="30"
            rows="5"
            className="w-full px-3 py-1 bg-[#484848] rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div
          className="border-2 border-[rgb(0,94,72)] flex justify-center text-lg py-1 rounded hover:bg-[rgb(0,94,72)] cursor-pointer"
          onClick={() => {
            addItem(title, imageURL, price, description);
            setTitle("");
            setImageURL("");
            setPrice("");
            setDescription("");
          }}
        >
          Add Product
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
