import React from 'react';
import ProductsTable from './ProductsTable';
import ActionBar from './ActionBar';

export const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ActionBar />
        </div>
      </div>
      <div className="row">
        <ProductsTable />
      </div>
    </div>
  );
};
