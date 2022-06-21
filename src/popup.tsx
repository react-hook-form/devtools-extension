import Popup from './popup/Popup';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popup enable={true} />
  </React.StrictMode>,
);
