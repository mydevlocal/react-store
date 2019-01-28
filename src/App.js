import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
