import { combineReducers } from "redux";
import HomeProductReducer from "../pages/Home/HomeProductReducer";
import ProductProductReducer from "../pages/SideBar/ProductProductReducer";
import cartReducer from "../cart/CartReducer";

export default combineReducers({
  HomeProductReducer,
  ProductProductReducer,
  cartReducer,
});
