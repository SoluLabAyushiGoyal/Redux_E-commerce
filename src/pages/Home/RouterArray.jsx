import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => {
  return articles;
};

const ReduxHomeProductArray = connect(mapStateToProps)(ConnectedList);

export default ReduxHomeProductArray;
