import React, { useState } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Header } from './components/header/header';

type ContextType = {
  orderNumber: number;
  setOrderNumber:  React.Dispatch<React.SetStateAction<number>> | undefined
}

export const OrderNumberContext = React.createContext<ContextType>({orderNumber: 0, setOrderNumber: undefined});

function App() {
  const [orderNumber, setOrderNumber] = useState(0);
  return (
    <div className="App">
      < OrderNumberContext.Provider value={{orderNumber, setOrderNumber}}>
        <RouterProvider router={router}/>
      </OrderNumberContext.Provider>
    </div>
  );
}

export default App;
