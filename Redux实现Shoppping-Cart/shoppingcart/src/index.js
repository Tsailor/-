import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { getAllProducts } from './actions/index'; 
import store from './store/store'

store.dispatch(getAllProducts()) 

ReactDOM.render(
   <Provider store ={store}>
      <App />
   </Provider>,
  document.getElementById('root')
);


