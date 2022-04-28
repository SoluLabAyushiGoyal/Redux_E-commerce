import react, { useState, useEffect } from "react";
import CartProducts from "../../cart/CartProducts";
import { Link } from "react-router-dom";
import { PriceFilter } from "./SideBar";

const AryOfProducts2 = (item) => {
  const ShowProduct1 = JSON.parse(localStorage.getItem("ArrayOfProducts"));
  const ValueTempt1 = ShowProduct1.find((Element) => {
    return item[0] == Element[0];
  });
  if (ValueTempt1?.length) {
    ValueTempt1[3] += 1;
    const xyz1 = ShowProduct1.filter((Element) => {
      return item[0] != Element[0];
    });
    xyz1.push(ValueTempt1);
    localStorage.setItem("ArrayOfProducts", JSON.stringify(xyz1));
    return;
  } else {
    ShowProduct1.push(item);

    localStorage.setItem("ArrayOfProducts", JSON.stringify(ShowProduct1));
  }
};

const ProductProductDisplay = (props) => {
  const temptProductProductArray = [];

  const iniPriceRange1 = props.PriceRangeFilterValue[0];
  const finalPriceRange1 = props.PriceRangeFilterValue[1];
  //console.log(iniPriceRange1);
  console.log(iniPriceRange1, finalPriceRange1, props.price);

  if (
    (parseInt(props.price) < finalPriceRange1 &&
      parseInt(props.price) > iniPriceRange1) ||
    parseInt(props.price) == finalPriceRange1 ||
    parseInt(props.price) == iniPriceRange1
  ) {
    const temptArray1 = [props.imgSrc, props.name, props.price, 1, props.id];
    temptProductProductArray.push(temptArray1);
  }

  return temptProductProductArray.map((item) => (
    <>
      <div class="col-sm-4">
        <div class="product-image-wrapper">
          <div class="single-products">
            <div class="productinfo text-center">
              <img src={item[0]} alt="" />
              <h2>${item[2]}</h2>
              <p>{item[1]}</p>
              <a href="#" class="btn btn-default add-to-cart">
                <i class="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div class="product-overlay">
              <div class="overlay-content">
                <h2>${item[2]}</h2>
                <p>Easy Polo Black Edition</p>
                <button
                  class="btn btn-default add-to-cart"
                  onClick={() => AryOfProducts2(item)}
                >
                  <i class="fa fa-shopping-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div class="choose">
            <ul class="nav nav-pills nav-justified">
              <li>
                <a href="">
                  <i class="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ));
};

export default ProductProductDisplay;
