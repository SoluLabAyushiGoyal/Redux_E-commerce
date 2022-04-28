import React, { useEffect, useState } from "react";
import "./Float.css";

const CartProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const ShowProduct = JSON.parse(localStorage.getItem("ArrayOfProducts"));
    setProduct(ShowProduct);
  }, []);

  const Plus = (item) => {
    const productVar = product.find((Element) => item[0] == Element[0]);
    productVar[3] = productVar[3] + 1;

    let ary = product.map((Element) =>
      Element[0] == item[0] ? item : Element
    );

    setProduct(ary);
    localStorage.setItem("ArrayOfProducts", JSON.stringify(ary));
  };
  const Minus = (item) => {
    const productVar = product.find((Element) => item[0] == Element[0]);
    productVar[3] = productVar[3] - 1;
    if (productVar[3] == 0) {
      const index = product.indexOf(item);
      product.splice(index, 1);
    }

    let ary = product.map((Element) =>
      Element[0] == item[0] ? item : Element
    );
    setProduct(ary);
    localStorage.setItem("ArrayOfProducts", JSON.stringify(ary));
  };

  const Cancle = (item) => {
    product.map((Element) => {
      if (Element[0] == item[0]) {
        product.splice(product.indexOf(Element), 1);
      }
      localStorage.setItem("ArrayOfProducts", JSON.stringify(product));
      setProduct(JSON.parse(localStorage.getItem("ArrayOfProducts")));
    });
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
