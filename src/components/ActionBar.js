import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import ProductForm from './ProductForm';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const ActionBar = ({ modal, toggleModal, getTerm }) => {
  return (
    <div className="btn-toolbar mt-3 mb-3" role="toolbar">
      <Modal header="Add Product">
        <ProductForm action="add" />
      </Modal>
      <button className="btn btn-primary mr-2" onClick={toggleModal}>
        Add Product
      </button>
      <form
        onSubmit={e => {
          e.preventDefault();
          getTerm(document.getElementById('search-term').value);
        }}
      >
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text" id="addon">
              Search
            </div>
          </div>
          <input
            id="search-term"
            // onChange={e => console.log(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { toggleModal })(ActionBar);
