import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addProduct, toggleModal } from '../actions';
import {
  saveProductsToLocal,
  getElementsValue,
  isValidName,
  isValidPrice
} from '../helper-functions';
import Swal from 'sweetalert2';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { price: 0, name: '' };
  }

  handleClick = () => {
    if (
      this.props.products.filter(
        p => p.name === getElementsValue('product-name')
      ).length === 0
    ) {
      this.props.addProduct({
        name: getElementsValue('product-name'),
        category: getElementsValue('product-category'),
        price: parseFloat(getElementsValue('product-price')),
        created_date: new Date().toDateString()
      });
      Swal.fire({
        icon: 'success',
        text: `${getElementsValue('product-name')} added!`
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'That product already exists!'
      });
    }

    this.setState({ price: 0, name: '' });
  };

  validateName = name => {
    if (isValidName(name)) {
      return;
    }
    return (
      <small id="emailHelp" className="form-text text-danger">
        please provide a name between 1 - 50 chars
      </small>
    );
  };

  validatePrice = price => {
    if (isValidPrice(price)) {
      return '';
    }
    return (
      <small id="emailHelp" className="form-text text-danger">
        Must be more than 0
      </small>
    );
  };

  validateFormBtn = (price, name) => {
    if (isValidPrice(price) && isValidName(name)) {
      return (
        <button
          id="add-product-btn"
          onClick={() => {
            return this.handleClick();
          }}
          onMouseUp={async () => {
            return this.props.toggleModal();
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
      );
    }
    return (
      <button className="btn btn-secondary" disabled>
        Submit
      </button>
    );
  };

  render() {
    return (
      <div>
        <div className="form-row mb-2">
          <label className="col-md-2 col-form-label">Product Name*</label>
          <div className="col">
            <input
              id="product-name"
              type="text"
              className="form-control"
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
              value={this.state.name}
            />
            {this.validateName(this.state.name)}
          </div>
        </div>
        <div className="form-row mb-4">
          <label className="col-md-2 col-form-label">Category*</label>
          <div className="col">
            <select id="product-category" className="form-control">
              <option>clothing</option>
              <option>housewares</option>
              <option>electronics</option>
              <option>food products</option>
              <option>sporting goods</option>
              <option>toys</option>
            </select>
          </div>
          <label className="col-md-2 col-form-label">Price*</label>
          <div className="col mb-2">
            <input
              id="product-price"
              type="number"
              className="form-control"
              onChange={e => {
                this.setState({ price: e.target.value });
              }}
              value={this.state.price}
            />
            {this.validatePrice(this.state.price)}
          </div>
        </div>

        {this.validateFormBtn(this.state.price, this.state.name)}
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

export default connect(mapStateToProps, {
  addProduct,
  toggleModal
})(AddProduct);
