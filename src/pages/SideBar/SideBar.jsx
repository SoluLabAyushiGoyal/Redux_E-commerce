import React, { useState, useContext } from "react";
//import { Range, getTrackBackground } from "react-range";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const SideBar = (props) => {
  function handleChange(event) {
    props.onChange(event.target.value);
  }
  return (
    <div class="col-sm-3">
      <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordian"
                  href="#sportswear"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Sportswear
                </a>
              </h4>
            </div>
            <div id="sportswear" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href="">Nike </a>
                  </li>
                  <li>
                    <a href="">Under Armour </a>
                  </li>
                  <li>
                    <a href="">Adidas </a>
                  </li>
                  <li>
                    <a href="">Puma</a>
                  </li>
                  <li>
                    <a href="">ASICS </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                  <span classname="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Mens
                </a>
              </h4>
            </div>
            <div id="mens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href="">Fendi</a>
                  </li>
                  <li>
                    <a href="">Guess</a>
                  </li>
                  <li>
                    <a href="">Valentino</a>
                  </li>
                  <li>
                    <a href="">Dior</a>
                  </li>
                  <li>
                    <a href="">Versace</a>
                  </li>
                  <li>
                    <a href="">Armani</a>
                  </li>
                  <li>
                    <a href="">Prada</a>
                  </li>
                  <li>
                    <a href="">Dolce and Gabbana</a>
                  </li>
                  <li>
                    <a href="">Chanel</a>
                  </li>
                  <li>
                    <a href="">Gucci</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordian"
                  href="#womens"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Womens
                </a>
              </h4>
            </div>
            <div id="womens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href="">Fendi</a>
                  </li>
                  <li>
                    <a href="">Guess</a>
                  </li>
                  <li>
                    <a href="">Valentino</a>
                  </li>
                  <li>
                    <a href="">Dior</a>
                  </li>
                  <li>
                    <a href="">Versace</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a href="#">Kids</a>
              </h4>
            </div>
          </div>
          <div class="panel panel-default">
            <div className="panel-heading">
              <h4 class="panel-title" Name="panel-heading"></h4>
              <h4 className="panel-title">
                <a href="#">Households</a>
              </h4>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a href="#">Interiors</a>
              </h4>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a href="#">Clothing</a>
              </h4>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 classNAME="panel-title">
                <a href="#">Bags</a>
              </h4>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a href="#">Shoes</a>
              </h4>
            </div>
          </div>
        </div>

        <div class="brands_products">
          <h2>Brands</h2>
          <div className="brands-name">
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="">
                  {" "}
                  <span className="pull-right">(50)</span>Acne
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span className="pull-right">(56)</span>Grüne Erde
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span className="pull-right">(27)</span>Albiro
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span className="pull-right">(32)</span>Ronhill
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span className="pull-right">(5)</span>Oddmolly
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span className="pull-right">(9)</span>Boudestijn
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span className="pull-right">(4)</span>Rösch creative culture
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="price-range">
          <h2>Price Range</h2>
          <div class="well">
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={props.value}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
            <br />
            <b className="pull-left">$ 0</b> <b className="pull-right">$ 100</b>
          </div>
        </div>

        <div className="shipping text-center">
          <img src="images/home/shipping.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
//export { PriceFilter };
