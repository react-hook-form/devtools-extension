import Devtools from './devtools/Devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Devtools />
  </React.StrictMode>,
);
