import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
   
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="index.html">Marketplace</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>
    <main> 
      <Routes>
        <Route path="*"  element={<HomeScreen />}/>
        <Route path="/product/:id"  element={<ProductScreen/>}/>
      </Routes>
    </main>
    <footer className="row center"> All rights reserved

    </footer>


  </div>
  

  );
}

export default App;