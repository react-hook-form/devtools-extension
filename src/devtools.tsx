import Devtools from './devtools/Devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';

chrome.devtools.network.onNavigated.addListener(() => {
  location.reload();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Devtools />
  </React.StrictMode>,
);
