import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

class App extends React.Component {
  render() {
    return (
      <section>
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={ () => (
              <Home name="Digite algum termo de pesquisa ou escolha uma categoria." />
            ) }
          />
          <Route path="/cart" component={ Cart } />
          <Route exact path="/ProductDetail/:id" component={ ProductDetail } />
          <Route exact path="/Checkout" component={ Checkout } />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
