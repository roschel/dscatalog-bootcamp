import React from 'react';
import './styles.scss'
import NavBar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';

const Admin = () => (
    <div className="admin-container">
        <NavBar />
        <div className="admin-content">
            <Switch>
                <Route path="/admin/products">
                    <h1>Products</h1>
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