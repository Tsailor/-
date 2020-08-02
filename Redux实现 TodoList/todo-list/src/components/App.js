import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import HandleTodoHeader from '../contaners/HandleTodoHeader.js';
import HandleTodoList from '../contaners/HandleTodoList.js';
import Footer from './Footer.js';

import todoReducer from '../reducer/todoReducer.js';


function App() {       // App 里 创建store，

  const store = createStore(todoReducer);

  return (
    <Provider store = { store }>
      {console.log(store.getState())}
        <HandleTodoHeader/>
        <HandleTodoList/>
        <Footer/>
    </Provider>
  );
}

export default App;
