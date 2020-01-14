import { combineReducers } from 'redux';

const productsListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'DELETE_PRODUCT':
      return state.filter(product => product.id !== action.id);
    default:
      return state;
  }
};

export default combineReducers({
  products: productsListReducer
});
