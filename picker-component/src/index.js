import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


(function init() {
  const screenResize =()=>{
    const designWidth = 750;
    const width = window.innerWidth;
    console.log("screen width",width)
    const fontSize = width / (designWidth / 100);
    window.document.documentElement.style.fontSize = fontSize + 'px';
  }
  screenResize()
  window.addEventListener('resize',screenResize);
})()
ReactDOM.render(<App />, document.getElementById('root'));
