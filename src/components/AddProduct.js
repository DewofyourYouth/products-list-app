import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct, toggleModal } from '../actions';

class AddProduct extends Component {
  getValueHelper(id) {
    return document.getElementById(id).value;
  }

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
          <div className="col-md-3">
            <input
              id="product-id"
              type="text"
              className="form-control"
              placeholder="id"
            />
          </div>
          <div className="col-md-9">
            <input
              id="product-name"
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <select id="product-category" className="form-control">
              <option>Clothing</option>
              <option>Housewares</option>
              <option>Electronics</option>
              <option>Sporting Goods</option>
              <option>Toys</option>
            </select>
          </div>
          <div className="col mb-2">
            <input
              id="product-price"
              type="number"
              className="form-control"
              placeholder="Price"
            />
          </div>
        </div>
        <button
          id="add-product-btn"
          onClick={() => {
            return this.handleClick();
          }}
          onMouseUp={() => this.props.toggleModal()}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
    products: state.products
  };
};

export default connect(mapStateToProps, { addProduct, toggleModal })(
  AddProduct
);
