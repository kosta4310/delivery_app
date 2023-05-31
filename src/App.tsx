import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Header } from './components/header/header';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
