import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';
import { RecipeProvider } from './context/index';

ReactDOM.render(
  <RecipeProvider>
    <App />
  </RecipeProvider>,
  document.getElementById('root')
);
