import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Home from './screens/home';
import reportWebVitals from './reportWebVitals';
import { About } from './components/screens/about';

ReactDOM.render(
  <React.StrictMode>
    <Home/>
    <About/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


