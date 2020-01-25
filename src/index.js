import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../src/assets/stylesheets/style.css';
import '../src/assets/stylesheets/start.css';
import './assets/stylesheets/signin.css';
import './assets/stylesheets/signup.css';
import './assets/stylesheets/start.css';
import App from '../src/components/App';


render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
