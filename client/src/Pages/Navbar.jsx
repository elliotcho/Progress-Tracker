import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar(props){
    const {title, nav1, nav2, nav3}=props

    return(
        <nav className='navbar'>
            <h2 className='navbar-brand ml-3 mt-2'>{title}</h2>

            <button className='navbar-toggler' data-toggle='collapse' data-target='#options'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse text-center' id='options'>
                <ul className='navbar-nav'>
                    <li className='nav-item active'><NavLink className='nav-link' exact to={nav1.path}>{nav1.name}</NavLink></li>
                    <li className='nav-item'><NavLink className='nav-link' exact to={nav2.path}>{nav2.name}</NavLink></li>
                    <li className='nav-item'><NavLink className='nav-link' exact to={nav3.path}>{nav3.name}</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;