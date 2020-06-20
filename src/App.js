import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
  } from "react-router-dom";


import './App.scss';

import Header from './components/Header/Header'

import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
    return (
        <BrowserRouter id="wrapper">
            <Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/shop" component={Shop} />
				<Route path="/cart"  component={Cart}/>
				<Route path="/product/:id" component={ProductPage} />
			</Switch>
        </BrowserRouter>
    );
}

export default App;
