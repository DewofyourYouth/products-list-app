import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct, toggleModal } from '../actions';
import { saveProductsToLocal } from '../helper-functions';

class ProductForm extends Component {
  getValueHelper(id) {
    return document.getElementById(id).value;
  }

  clearAllFields = () => {
    return new Promise(resolve => {
      const allInputs = document.querySelectorAll('input');
      setTimeout(() => {
        allInputs.forEach(el => (el.value = ''));
        resolve();
      }, 200);
    });
  };

  handleClick = () => {
    this.props.addProduct({
      id: this.getValueHelper('product-id'),
      name: this.getValueHelper('product-name'),
      category: this.getValueHelper('product-category'),
      price: parseInt(this.getValueHelper('product-price')),
      created_date: new Date().toDateString()
    });
  };

  render() {
    return (
      <div>
        <div className="form-row mb-2">
          <label className="col-md-2 col-form-label">Product Name*</label>
          <div className="col">
            <input id="product-name" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-row mb-4">
          <label className="col-md-2 col-form-label">Category*</label>
          <div className="col">
            <select id="product-category" className="form-control">
              <option>Clothing</option>
              <option>Housewares</option>
              <option>Electronics</option>
              <option>Food Product</option>
              <option>Sporting Goods</option>
              <option>Toys</option>
            </select>
          </div>
          <label className="col-md-2 col-form-label">Price*</label>
          <div className="col mb-2">
            <input id="product-price" type="number" className="form-control" />
          </div>
        </div>
        <button
          id="add-product-btn"
          onClick={() => {
            return this.handleClick();
          }}
          onMouseUp={async () => {
            await this.clearAllFields();
            return this.props.toggleModal();
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  saveProductsToLocal(state.products);
  return {
    modal: state.modal,
    products: state.products
  };
};

export default connect(mapStateToProps, { addProduct, toggleModal })(
  ProductForm
);
