import React from 'react';
import './Modal.css';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';

const Modal = ({ show, header, toggleModal, children }) => {
  return (
    <div className={show ? 'mod' : 'mod-hidden'}>
      <div className="mod-content-wrapper">
        <div className="mod-header">
          <h2>{header}</h2>
          <button className="btn btn-warning" onClick={toggleModal}>
            Close
          </button>
        </div>
        <div className="mod-main">{children}</div>
        <div className="mod-footer"></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { show: state.modal };
};

export default connect(mapStateToProps, { toggleModal })(Modal);
