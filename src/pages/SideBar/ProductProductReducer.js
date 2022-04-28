import ProductProductDisplayArray from "./ProductProductDisplayArray";

const initialState = { product: [...ProductProductDisplayArray] };
const ProductProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_PRODUCT_PRODUCT":
      return state.mycart;
      break;

    default:
      return state;
      break;
  }
};
export default ProductProductReducer;
