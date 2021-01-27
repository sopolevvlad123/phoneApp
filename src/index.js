import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ModalProvider } from 'react-modal-hook';
import App from './components/App';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);
