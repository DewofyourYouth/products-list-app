import { combineReducers } from 'redux';

const productsListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'DELETE_PRODUCT':
      return state.filter(product => product.name !== action.name);
    case 'EDIT_PRODUCT':
      const newProduct = state.map(x =>
        x.payload.name === action.payload.name ? action.payload : x
      );
      return newProduct;
    default:
      return state;
  }
};

const modalDisplayReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  products: productsListReducer,
  modal: modalDisplayReducer
});
