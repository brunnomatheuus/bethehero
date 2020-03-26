import React from 'react';
import './global.css';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

function App() {
  return (
    <>
      <ToastContainer 
        autoClose={4000}
      />
      <Routes />
    </>
  );
}

export default App;
