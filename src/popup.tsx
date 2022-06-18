import React from 'react';
import ReactDOM from 'react-dom/client';

const Popup: React.FC = () => {
  return <div>Popup</div>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
);
