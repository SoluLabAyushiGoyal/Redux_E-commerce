import HomeProductArray from "./HomeProductArray";

const initialState = { article: [...HomeProductArray] };
const HomeProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_HOME_PRODUCT":
      return state.article;
      break;

    default:
      return state;
      break;
  }
};
export default HomeProductReducer;
