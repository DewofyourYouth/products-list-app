// Product actions
export const addProduct = payload => ({
  type: 'ADD_PRODUCT',
  payload: payload
});

export const deleteProduct = id => ({
  type: 'DELETE_PRODUCT',
  id
});

// Modal actions
export const toggleModal = () => ({
  type: 'TOGGLE_MODAL'
});
