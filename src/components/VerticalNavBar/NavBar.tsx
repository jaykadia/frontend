import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import './sidebar.css'



export default class NavBar extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="container" >
                <NavLink exact className="item"  to="/"><button type="button" className="button button5">Home</button></NavLink>
                <NavLink exact className="item"  to="/sync"><button className="button button5">Sync</button></NavLink>
                <NavLink className="item" to="/history"><button className="button button5">History</button></NavLink>
                <a className="item" href="/mapping"><button className="button button5">Mapping</button></a>
                <a className="item" href="/selectivesync"><button className="button button5">Selective Sync</button></a>
                
                </div>

                        
        )
    }
}
