const CreateAction = () => {
  return {
    type: "SHOW_PRODUCT_PRODUCT",
  };
};

const CreateHomeAction = () => {
  return {
    type: "SHOW_HOME_PRODUCT",
  };
};

const AddToCart = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload,
  };
};

const IncreamentCart = (payload) => {
  return {
    type: "INCREAMENT_CART",
    payload,
  };
};

const DecreamentCart = (payload) => {
  return {
    type: "DECREAMENT_CART",
    payload,
  };
};

const CancleCart = (payload) => {
  //console.log("a");
  return {
    type: "CANCLE_CART",
    payload,
  };
};

export default CreateAction;
export {
  AddToCart,
  CreateHomeAction,
  IncreamentCart,
  DecreamentCart,
  CancleCart,
};
