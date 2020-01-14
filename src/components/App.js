import React from 'react';
import ProductsTable from './ProductsTable';

export const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>App Component</h3>
        </div>
      </div>
      <div className="row">
        <ProductsTable />
      </div>
    </div>
  );
};
