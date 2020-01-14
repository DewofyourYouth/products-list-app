import React from 'react';
import './Modal.css';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';

const Modal = ({ show, header, toggleModal, children }) => {
  return (
    <div className={show ? 'mod' : 'mod-hidden'}>
      <div className="mod-content-wrapper">
        <div className="modal-header">
          <h3 className="modal-header">{header}</h3>
          <button className="btn btn-warning" onClick={toggleModal}>
            Close
          </button>
        </div>
        <div className="modal-main">{children}</div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { show: state.modal };
};

export default connect(mapStateToProps, { toggleModal })(Modal);
