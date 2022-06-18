import React from 'react';
import ReactDOM from 'react-dom/client';

const Devtools: React.FC = () => {
  return <div>Devtools</div>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Devtools />
  </React.StrictMode>,
);
