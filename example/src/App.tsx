import React from 'react';
import './App.css';
import Form1 from './components/Form1';
import Form2 from './components/Form2';

const App: React.FC = () => {
  return (
    <>
      <h1>Form1</h1>
      <Form1 />
      <h1>Form2</h1>
      <Form2 />
    </>
  );
};

export default App;
