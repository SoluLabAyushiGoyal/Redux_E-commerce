//const localStorageData = JSON.parse(localStorage.getItem("ArrayOfProducts"));

const initialState = {
  cartItem: localStorage.getItem("ArrayOfProducts")
    ? JSON.parse(localStorage.getItem("ArrayOfProducts"))
    : [],
};
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //console.log(state);
      //console.log(initialState);
      // console.log(JSON.parse(localStorage.getItem("ArrayOfProducts")));
      return {
        ...state,

        cartItem: JSON.parse(localStorage.getItem("ArrayOfProducts")),
      };
      break;
    // return state.cartitem==arrayOfProducts
    case "INCREAMENT_CART":
      return {
        ...state,

        cartItem: action.payload,
      };
      break;
    case "DECREAMENT_CART":
      return {
        ...state,

        cartItem: action.payload,
      };
    case "CANCLE_CART":
      return {
        ...state,
        cartItem: JSON.parse(localStorage.getItem("ArrayOfProducts")),

        // cartItem: JSON.parse(localStorage.getItem("ArrayOfProducts")),
      };
      break;

    default:
      return state;
      break;
  }
};
export default CartReducer;

// const initialState = {
//   mycart: JSON.parse(localStorage.getItem("ArrayOfProducts")),
//   // localStorage.getItem("cartitems")
//   // ? JSON.parse(localStorage.getItem("ArrayOfProducts"))
//   // : [],
// };
// const CartReducer = (state = initialState, action) => {
//   switch (action.type) {
// case "ADD_TO_CART":
//       console.log(initialState);
// const item = action.payload[0];
// const existitem = state.mycart.find((x) => x[0] == item);
// if (existitem) {
//   localStorage.setItem(
//     "ArrayOfProducts",
//     JSON.stringify(
//       state.mycart.map((x) => (x[0] == item ? action.payload : x))
//     )
//   );

// return {
//   ...state,
//   // mycart: state.mycart.map((x) => (x[0] == item ? action.payload : x)),
// };
// } else {
//   localStorage.setItem(
//     "ArrayOfProducts",
//     JSON.stringify([...state.mycart, action.payload])
//   );
//   return { ...state, mycart: [...state.mycart, action.payload] };
// }
