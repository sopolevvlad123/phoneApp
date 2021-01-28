import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from 'react-modal-hook';
// eslint-disable-next-line import/no-named-as-default
import App from './components/App';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <ModalProvider ariaHideApp={false}>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
