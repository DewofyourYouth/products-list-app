import React from 'react';
import DeleteProductButton from './DeleteProductButton';
import Swal from 'sweetalert2';
import { formatDateToString, formatCurrency } from '../helper-functions';

export const ProductItemRow = ({ item }) => {
  return (
    <tr
      onDoubleClick={() =>
        Swal.fire({
          title: 'Edit Item',
          html: `Name: ${item.name}<br />
          Category: ${item.category}<br />
          Price: ${formatCurrency(item.price)}`
        })
      }
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
