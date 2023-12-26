import { nanoid } from "@reduxjs/toolkit";

const customProducts = (state, action) => {
  action.payload.forEach((product) => {
    const productData = {
      _id: product._id,
      title: product.title,
      discription: product.discription,
      imageURL: product.imageURL,
      price: product.price,
    };
    state.products.push(productData);
  });
};

const apiProducts = (state, action) => {
  action.payload.forEach((product) => {
    const productData = {
      _id: nanoid(),
      title: product.title,
      category: product.category,
      discription: product.discription,
      imageURL: product.image,
      price: product.price * 100,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count,
      },
    };
    state.products.push(productData);
  });
};

export { customProducts, apiProducts };
