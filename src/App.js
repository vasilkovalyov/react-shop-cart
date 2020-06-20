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

function App() {
    return (
        <BrowserRouter id="wrapper">
            <Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/shop">
					<Shop />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
			</Switch>
        </BrowserRouter>
    );
}

export default App;
