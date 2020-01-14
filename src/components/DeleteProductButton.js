import React from 'react';
import { connect } from 'react-redux';
import { saveProductsToLocal } from '../helper-functions';
import { deleteProduct } from '../actions';

const DeleteProductButton = ({ productName, products, deleteProduct }) => {
  return (
    <button
      data-product-name={productName}
      id={productName}
      className="btn btn-danger"
      onClick={() => deleteProduct(productName)}
    >
      Delete
    </button>
  );
};

const mapStateToProps = state => {
  saveProductsToLocal(state.products);
  return { products: state.products };
};

export default connect(mapStateToProps, { deleteProduct })(DeleteProductButton);
