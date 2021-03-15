import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <nav className="navbar">
                        <div className="navbar-brand">
                        <img  style={{position:'fixed', left: '1%'}} src={logo} alt="alternettext" />
                            {/* <NavLink exact activeClassName="active" to="/">Home</NavLink>
                            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
                            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small> */}
                            <NavLink activeClassName="active"  style={{position:'fixed', right: '0'}} to="/login">Logout</NavLink>
                        </div>

                    </nav>
                </header>
            </div>
        )
    }
}
