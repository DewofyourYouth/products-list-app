export const addProduct = ({ id, name, category, price, created_date }) => ({
  type: 'ADD_PRODUCT',
  payload: { id, name, category, price, created_date }
});

export const deleteProduct = id => ({
  type: 'DELETE_PRODUCT',
  id
});
