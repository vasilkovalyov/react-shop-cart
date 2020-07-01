import React, { Component } from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
  } from "react-router-dom";


import './App.scss';

import Header from './components/Header/Header.jsx'

import Shop from './pages/Shop/Shop.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'
import Wishlist from './pages/Wishlist/Wishlist.jsx'
import ProductInner from './pages/ProductInner/ProductInner.jsx'


class App extends Component {
	
    render() {
		console.log(this.props);
		return (
			<BrowserRouter id="wrapper">
				<Header />
				<div id="main">
					<Switch>
						<Route exact path="/" component={Shop} />
						<Route exact path="/cart" component={Cart}/>
						<Route exact path="/checkout" component={Checkout}/>
						<Route exact path="/wishlist" component={Wishlist}/>
						<Route exact path="/product/:id" component={ProductInner}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
