import React, { useState, useEffect } from "react";
import CartProducts from "../../cart/CartProducts";
//import {Link} from "react-router-dom";

const AryOfCart = (item) => {
  const temptArray = JSON.parse(localStorage.getItem("ArrayOfProducts"));
  if (temptArray == null) {
    localStorage.setItem("ArrayOfProducts", JSON.stringify([]));
  }
  const ValueTempt = temptArray.find((Element) => {
    return item[0] == Element[0];
  });
  if (ValueTempt?.length) {
    ValueTempt[3] += 1;
    const xyz = temptArray.filter((Element) => {
      return item[0] != Element[0];
    });
    xyz.push(ValueTempt);
    localStorage.setItem("ArrayOfProducts", JSON.stringify(xyz));
    return;
  } else {
    temptArray.push(item);

    localStorage.setItem("ArrayOfProducts", JSON.stringify(temptArray));
  }
};

const HomeProducts = (props) => {
  const temptHomeProductArray = [];
  const iniPriceRange = props.PriceRangeFilterValue[0];
  const finalPriceRange = props.PriceRangeFilterValue[1];
  console.log(iniPriceRange, finalPriceRange);
  if (
    (parseInt(props.price) < finalPriceRange &&
      parseInt(props.price) > iniPriceRange) ||
    parseInt(props.price) == iniPriceRange ||
    parseInt(props.price) == finalPriceRange
  ) {
    const temptArray = [props.imgSrc, props.name, props.price, 1, props.id];
    temptHomeProductArray.push(temptArray);
  }
  return temptHomeProductArray.map((item) => (
    <>
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={item[0]} alt="" />
              <h2>${item[2]}</h2>
              <p>{item[1]}</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>${item[2]}</h2>
                <p>Easy Polo Black Edition</p>
                <button
                  className="btn btn-default add-to-cart"
                  onClick={() => AryOfCart(item)}
                >
                  <i className="fa fa-shopping-cart"></i>Add to product
                </button>
              </div>
            </div>
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ));
};
export default HomeProducts;
