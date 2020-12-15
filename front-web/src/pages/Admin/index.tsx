import React from 'react';
import './styles.scss'
import NavBar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Products from './components/Products';

const Admin = () => (
    <div className="admin-container">
        <NavBar />
        <div className="admin-content">
            <Switch>
                <Route path="/admin/products">
                    <Products />
                </Route>
                <Route path="/admin/categories">
                    <h1>Categories</h1>
                </Route>
                <Route path="/admin/users">
                    <h1>Users</h1>
                </Route>
            </Switch>
        </div>
    </div>
);

export default Admin;