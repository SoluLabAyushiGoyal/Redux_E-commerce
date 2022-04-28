import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./pages/Menu";
//import React from "react";
import Loader from "./Components/Loader";
import ProductDetail from "./pages/ProductDetail";
import Product from "./pages/Product";
import CheckOut from "./pages/CheckOut";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Error from "./pages/Error";
import BlogSingle from "./pages/BlogSingle";
import BlogList from "./pages/BlogList";
import ContactUs from "./pages/ContactUs";
import React, { Component } from "react";
import { connect } from "react-redux";
import CreateAction from "./actions/CreateAction";

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  CreateAction: () => dispatch(CreateAction()),
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            key="Menu"
            path="/menu"
            element={
              <React.Suspense fallback={<Loader />}>
                <Menu />
              </React.Suspense>
            }
          />
          <Route
            key="ProductDetail"
            path="/productdetail"
            element={
              <React.Suspense fallback={<Loader />}>
                <ProductDetail />
              </React.Suspense>
            }
          />

          <Route
            key="BlogList"
            path="/bloglist"
            element={
              <React.Suspense fallback={<Loader />}>
                <BlogList />
              </React.Suspense>
            }
          />
          <Route
            key="Error"
            path="/404"
            element={
              <React.Suspense fallback={<Loader />}>
                <Error />
              </React.Suspense>
            }
          />
          <Route
            key="Product"
            path="/products"
            element={
              <React.Suspense fallback={<Loader />}>
                <Product />
              </React.Suspense>
            }
          />

          <Route
            key="CheckOut"
            path="/checkout"
            element={
              <React.Suspense fallback={<Loader />}>
                <CheckOut />
              </React.Suspense>
            }
          />

          <Route
            key="Cart"
            path="/cart"
            element={
              <React.Suspense fallback={<Loader />}>
                <Cart />
              </React.Suspense>
            }
          />

          <Route
            key="Login"
            path="/login"
            element={
              <React.Suspense fallback={<Loader />}>
                <Login />
              </React.Suspense>
            }
          />

          <Route
            key="BlogSingle"
            path="/blogsingle"
            element={
              <React.Suspense fallback={<Loader />}>
                <BlogSingle />
              </React.Suspense>
            }
          />

          <Route
            key="ContactUs"
            path="/contactus"
            element={
              <React.Suspense fallback={<Loader />}>
                <ContactUs />
              </React.Suspense>
            }
          />

          <Route key="Menu" path="*" element={<Navigate to="/menu" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
