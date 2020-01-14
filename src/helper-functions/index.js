export const getElementsValue = id => document.getElementById(id).value;

// some helpers to format input
export const formatDateToString = dateStr => {
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

export const formatCurrency = price => `$${price.toFixed(2)}`;

// some helpers for validation

//some helpers for sorting and searching

// should be put before the return in mapStateToProps
export const saveProductsToLocal = arr => {
  return { products: (localStorage.product = JSON.stringify(arr)) };
};
