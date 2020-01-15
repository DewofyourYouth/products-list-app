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
          name: 'pants',
          category: 'clothing',
          price: 29.99,
          created_date: '10/5/2019'
        },
        {
          name: 'teddy bear',
          category: 'toys',
          price: 14.5,
          created_date: '8/4/2019'
        },
        {
          name: 'blazer',
          category: 'clothing',
          price: 50.99,
          created_date: '3/5/2019'
        },
        {
          name: 'golf club',
          category: 'sporting goods',
          price: 32,
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
