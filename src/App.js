import Product from './components/Product'
import data from './data';

function App() {
  return (
    <BrowserRouter> </BrowserRouter>
      <div className="grid-container">
      <header className="row">
          <div>
              <a href="index.html" className="brand">KaBuYours</a>
          </div>
          <div>
              <a href="/cart"> Cart</a>
              <a href="/signin">Sign In</a>
          </div>
      </header>

      <main>
        <div className="row center">
          {
            data.products.map(product => (
            <Product key={product._id} product={product}></Product>))
          }
              
          </div>
        </main>
        <footer className="row center"> All Rights Reserved
        </footer>
    </div>
  );
}

export default App;
