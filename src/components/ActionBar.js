import React from 'react';

export const ActionBar = () => {
  return (
    <div className="btn-toolbar mt-3 mb-3" role="toolbar">
      <button className="btn btn-primary mr-2">Add Product</button>
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
