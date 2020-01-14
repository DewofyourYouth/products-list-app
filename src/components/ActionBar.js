import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import AddProduct from './AddProduct';

const ActionBar = ({ modal, toggleModal }) => {
  return (
    <div className="btn-toolbar mt-3 mb-3" role="toolbar">
      <Modal header="Add Product">
        <AddProduct />
      </Modal>
      <button className="btn btn-primary mr-2" onClick={toggleModal}>
        Add Product
      </button>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text" id="addon">
            Search
          </div>
        </div>
        <input type="text" className="form-control" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { toggleModal })(ActionBar);
