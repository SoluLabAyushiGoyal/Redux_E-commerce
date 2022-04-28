import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import HomeProducts from "./HomeProducts";
import HomeRemaining from "./HomeRemaining";
import HomeProductArray from "./HomeProductArray";
import { useSelector } from "react-redux";
//import ReduxHomeProductArray from "./RouterArray";

const HomeMid = () => {
  const [value, setValue] = React.useState([30, 70]);
  function handleChange(newValue) {
    setValue(newValue);
  }
  const state = useSelector((state) => state.HomeProductReducer.article);
  //console.log(state);
  const PriceRangeValue = value;
  //console.log(ReduxHomeProductArray);
  return (
    <>
      {/* <SideBar rangeValue={rangeValue } setRangeValue={setRangeValue}/> */}
      <SideBar value={value} onChange={handleChange} />
      <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        {state?.map((item) => {
          return (
            <HomeProducts
              key={item.id}
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              id={item.id}
              PriceRangeFilterValue={PriceRangeValue}
            />
          );
        })}
      </div>
      <HomeRemaining />
    </>
  );
};

export default HomeMid;
