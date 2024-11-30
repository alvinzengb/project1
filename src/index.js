import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18n from './i18n';  // import the i18n configuration
import { I18nextProvider } from 'react-i18next';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);
