import React from 'react';
import DeleteProductButton from './DeleteProductButton';

export const ProductItemRow = ({ item }) => {
  const formatDateString = dateStr => {
    const d = new Date(dateStr);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    const [day, month, year] = [
      d.getDate(),
      months[d.getMonth()],
      d.getFullYear()
    ];
    return `${month} ${day}, ${year}`;
  };

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{`$${item.price.toFixed(2)}`}</td>
      <td>{formatDateString(item.created_date)}</td>
      <td>
        <DeleteProductButton productId={item.id} />
      </td>
    </tr>
  );
};
