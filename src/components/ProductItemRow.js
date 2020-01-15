import React from 'react';
import DeleteProductButton from './DeleteProductButton';
import { formatDateToString, formatCurrency } from '../helper-functions';

export const ProductItemRow = ({ item, product }) => {
  return (
    <tr
      onDoubleClick={() => {
        product(item.name);
      }}
    >
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{formatCurrency(item.price)}</td>
      <td>{formatDateToString(item.created_date)}</td>
      <td>
        <DeleteProductButton productName={item.name} />
      </td>
    </tr>
  );
};
