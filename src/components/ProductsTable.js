import React from 'react';
import { connect } from 'react-redux';

import { ProductItemRow } from './ProductItemRow';

const ProductsTable = ({ products }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Created Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductItemRow key={product.id} item={product} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductsTable);
