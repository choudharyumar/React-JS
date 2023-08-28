import { ADD_TO_CART } from "../Constants";
export const AddToCart = (data) => {
  console.warn("data", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
