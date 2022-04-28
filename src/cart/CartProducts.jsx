import React, { useEffect, useState } from "react";
import "./Float.css";
import { useDispatch } from "react-redux";
import {
  IncreamentCart,
  DecreamentCart,
  CancleCart,
} from "../actions/CreateAction";
import { useSelector } from "react-redux";

const CartProducts = () => {
  const CartProductState = useSelector((state) => state.cartReducer.cartItem);
  //console.log(CartProductState);
  const dispatchInc = useDispatch();
  const dispatchDec = useDispatch();
  const dispatchCancle = useDispatch();
  const [product, setProduct] = useState([]);
  // setProduct(CartProductState);
  useEffect(() => {
    //const ShowProduct = JSON.parse(localStorage.getItem("ArrayOfProducts"));
    setProduct(CartProductState);
  }, [CartProductState]);

  const Plus = (item) => {
    const productVar = product.find((Element) => item[0] == Element[0]);
    productVar[3] = productVar[3] + 1;
    //item[3] = item[3] + 1;

    let ary = product.map((Element) =>
      Element[0] == item[0] ? item : Element
    );
    //console.log(ary);
    dispatchInc(IncreamentCart(ary));
    //setProduct(ary);
    console.log(ary);
    localStorage.setItem("ArrayOfProducts", JSON.stringify(ary));
  };
  const Minus = (item) => {
    const productVar = product.find((Element) => item[0] == Element[0]);
    productVar[3] = productVar[3] - 1;
    if (productVar[3] == 0) {
      const index = product.indexOf(item);
      product.splice(index, 1);
    }
    //dispatch(DecreamentCart(temptArray));
    let ary = product.map((Element) =>
      Element[0] == item[0] ? item : Element
    );
    //setProduct(ary);
    dispatchInc(DecreamentCart(ary));
    localStorage.setItem("ArrayOfProducts", JSON.stringify(ary));
  };

  const Cancle = (item) => {
    // console.log("a");
    product.map((Element) => {
      if (Element[0] == item[0]) {
        product.splice(product.indexOf(Element), 1);
      }
    });
    //dispatchCancle(CancleCart(temptArray));
    localStorage.setItem("ArrayOfProducts", JSON.stringify(product));
    //setProduct(JSON.parse(localStorage.getItem("ArrayOfProducts")));
    const NewArray = JSON.parse(localStorage.getItem("ArrayOfProducts"));
    console.log("a");
    dispatchInc(CancleCart(NewArray));
    //console.log("ayushi");
    //setProduct(CartProductState);
  };

  return (
    product !== null &&
    product.map((item) => (
      <tr>
        <td class="cart_product">
          <a href="">
            <img src={item[0]} alt="" />
          </a>
        </td>
        <td class="cart_description">
          <h4>
            <a href="">{item[1]}</a>
          </h4>
          <p>Web ID: 1089772</p>
        </td>
        <td class="cart_price">
          <p>${item[2]}</p>
        </td>
        <td class="cart_quantity">
          <div class="cart_quantity_button">
            <button onClick={() => Plus(item)} className="float">
              <a href="#" style={{ textDecoration: "none" }}>
                +
              </a>
            </button>
            <input
              class="cart_quantity_input"
              type="number"
              name="quantity"
              value={item[3]}
              autocomplete="off"
              size="2"
              className="float"
              style={{ height: "33px", width: "60px", textAlign: "center" }}
            />
            <button onClick={() => Minus(item)} className="float">
              <a href="#" style={{ textDecoration: "none" }}>
                -
              </a>
            </button>
          </div>
        </td>
        <td class="cart_total">
          <p class="cart_total_price">${item[2] * item[3]}</p>
        </td>
        <td class="cart_delete">
          <button
            class="cart_quantity_delete"
            style={{ border: "none", width: "20px", backgroundColor: "white" }}
            onClick={() => Cancle(item)}
          >
            <a onclick={"javascript:void(0)"}>
              <i class="fa fa-times"></i>
            </a>
          </button>
          {/* <a class="cart_quantity_delete" href="">
            <i class="fa fa-times"></i>
          </a> */}
        </td>
      </tr>
    ))
  );
};
export default CartProducts;
