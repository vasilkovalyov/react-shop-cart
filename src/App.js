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


class App extends Component {
	componentDidMount() {
		
	}

    render() {
		return (
			<BrowserRouter id="wrapper">
				<Header />
				<Switch>
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/cart"  component={Cart}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
