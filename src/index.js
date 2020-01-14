import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App } from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      {
        products: [
          {
            id: 'p1-cl',
            name: 'pants',
            category: 'clothing',
            price: 29.99,
            created_date: '10/5/2019'
          },
          {
            id: 'td1-ty',
            name: 'teddy bear',
            category: 'toys',
            price: 14.5,
            created_date: '8/4/2019'
          },
          {
            id: 'b1-cl',
            name: 'blazer',
            category: 'clothing',
            price: 50.99,
            created_date: '3/5/2019'
          },
          {
            id: 'gc1-sp',
            name: 'golf club',
            category: 'sporting goods',
            price: 32,
            created_date: '2/10/19'
          }
        ]
      },
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.querySelector('#root')
);
