import React from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import { getIndexByName } from '../helper-functions';
import { selectProduct, updateProduct } from '../actions';
import { ProductItemRow } from './ProductItemRow';

const ProductsTable = ({ products, selectProduct, updateProduct }) => {
  const getSelectedProduct = product => {
    selectProduct(product);
    const prodIdx = getIndexByName(products, product);
    Swal.fire({
      title: `Edit Price: ${product}`,
      input: 'number',
      inputValue: products[prodIdx].price,
      inputValidator: value => {
        if (value <= 0) {
          return 'Must be above 0!';
        }
      }
    }).then(result => {
      if (result.value) {
        updateProduct({
          name: products[prodIdx].name,
          category: products[prodIdx].category,
          price: parseFloat(result.value),
          created_date: products[prodIdx].created_date
        });
      }
    });
  };
  return (
    <div className="col-md-12">
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
            <ProductItemRow
              key={product.name}
              item={product}
              product={getSelectedProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, { selectProduct, updateProduct })(
  ProductsTable
);
