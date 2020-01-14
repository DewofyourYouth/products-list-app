// Product actions
export const addProduct = payload => ({
  type: 'ADD_PRODUCT',
  payload
});

export const deleteProduct = name => ({
  type: 'DELETE_PRODUCT',
  name
});

export const updateProduct = payload => ({
  type: 'EDIT_PRODUCT',
  payload
});

// Modal actions
export const toggleModal = () => ({
  type: 'TOGGLE_MODAL'
});
