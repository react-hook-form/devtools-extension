import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

window.__RHF_DEVTOOLS_CONTROLS__ = {};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
