import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App } from './components/App';
import reducers from './reducers';

const productsList = localStorage.product
  ? { products: JSON.parse(localStorage.product) }
  : {
      products: [
        {
          name: 'iPhone XS',
          category: 'electronics',
          price: 999,
          created_date: '10/5/2019'
        },
        {
          name: 'Kangaroo Cuddly Giant Plush Teddy Bear',
          category: 'toys',
          price: 59.95,
          created_date: '8/4/2019'
        },
        {
          name: 'Slim Jim Smoked Snack Stick Pantry Pack (46 count)',
          category: 'food products',
          price: 8.62,
          created_date: '1/3/2020'
        },
        {
          name: 'MacBook Air',
          category: 'electronics',
          price: 1199,
          created_date: '3/5/2019'
        },
        {
          name: "Ben & Jerry's Half Baked Ice Cream (16oz)",
          category: 'food product',
          price: 4.57,
          created_date: '12/31/19'
        },
        {
          name: 'Callaway Edge 10-piece Golf Club Set',
          category: 'sporting goods',
          price: 644.82,
          created_date: '2/10/19'
        }
      ]
    };

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      productsList,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.querySelector('#root')
);
