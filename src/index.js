import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './Reducer/Index';

//reducer store
const store = createStore(Reducer);

//running
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
       <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
