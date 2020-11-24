import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Menu from './pages/Menu';
import User from './pages/User';
import Sector from './pages/Sector';
import Product from './pages/Product';
import ProductSearch from './pages/SearchProduct';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory({forceRefresh:true})


export default function Routes() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route
                    path="/"
                    component={Login}
                    exact
                />
                <Route
                    path="/menu"
                    component={Menu}
                    exact
                />
                <Route
                    path="/user/insert"
                    component={User}
                    exact
                />
                <Route
                    path="/sector/insert"
                    component={Sector}
                    exact
                />                
                <Route
                    path="/product/insert"
                    component={Product}
                    exact
                />
                <Route
                    path="/product/search"
                    component={ProductSearch}
                    exact
                />
            </Switch>
        </BrowserRouter>
    )
}