import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import { getAllProducts } from './actions/index'; 

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger )
}
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)
store.dispatch(getAllProducts())  //  react-thunk使dispatch可以接受一个函数

ReactDOM.render(
   <Provider store ={store}>
     {console.log(store.getState())}
      <App />
   </Provider>,
  document.getElementById('root')
);


