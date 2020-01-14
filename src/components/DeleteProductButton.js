import React from 'react';
import { connect } from 'react-redux';

import { deleteProduct } from '../actions';

const DeleteProductButton = ({ productId, deleteProduct }) => {
  return (
    <button
      data-product-id={productId}
      id={productId}
      className="btn btn-danger"
      onClick={() => deleteProduct(productId)}
    >
      Delete
    </button>
  );
};

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(mapStateToProps, { deleteProduct })(DeleteProductButton);
