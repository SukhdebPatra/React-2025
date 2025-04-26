import React, { useState } from "react";
import "./shop.css";
import Filter from "../Components/Filter";
import Product from "../Components/Product";

const initialProducts = [
  {
    id: 1,
    name: "PPXOC Milkyway Dress",
    img: "/images/prod1.jpg",
    badge: "New Product",
    price: null,
    outOfStock: false,
  },
  {
    id: 2,
    name: "PPXOC Milkyway Dress",
    img: "/images/prod2.jpg",
    badge: null,
    price: null,
    outOfStock: true,
  },
  {
    id: 3,
    name: "Product Name",
    img: "/images/prod3.jpg",
    badge: null,
    price: null,
    outOfStock: false,
  },
];

const Shop = () => {
  return (
    <>
      {/* <Filter /> */}
      <Product />
    </>
  );
};

export default Shop;
