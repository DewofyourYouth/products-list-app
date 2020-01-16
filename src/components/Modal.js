import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Modal.css';
import { toggleModal } from '../actions';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ show, header, toggleModal, children }) => {
  return (
    <div className={show ? 'mod' : 'mod-hidden'}>
      <div className="mod-content-wrapper">
        <div className="mod-header">
          <h2>{header}</h2>
          <button
            style={{
              border: 'none',
              borderRadius: '50%',
              fontSize: '1.5rem',
              backgroundColor: 'transparent'
            }}
            onClick={toggleModal}
          >
            <FontAwesomeIcon icon={faTimes} />
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
