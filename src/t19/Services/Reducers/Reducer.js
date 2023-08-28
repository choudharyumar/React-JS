import { ADD_TO_CART } from "../Constants";
const initialState = {
  cardData: [],
};

export default function cardItem(state = initialState, action) {
  console.log("action", action?.type);
  switch (action?.type) {
    case ADD_TO_CART:
      return [...state, { cardData: action.data }];

    default:
      return state;
  }
}
