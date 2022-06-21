import { enable } from './mock-data';
import Popup from './popup/Popup';
import React from 'react';
import ReactDOM from 'react-dom/client';

if (enable) {
  chrome.action.setIcon({
    path: { 16: 'images/icon16.png', 32: 'images/icon32.png' },
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popup enable={enable} />
  </React.StrictMode>,
);
