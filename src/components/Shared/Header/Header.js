import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.PNG';
import './Header.css';

const Header = () => {
    // menu items
    const menuItems = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/portfolio">portfolio</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        {/* {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        <li>{user ? <button onClick={logOut} className="btn btn-ghost font-bold">Sign Out</button> : <Link to="/login">Login</Link>}</li> */}
    </>
    return (
        <div className="navbar custom-bg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow text-primary font-bold bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-3xl text-white"><h3>Power Hack</h3></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white">
                    {menuItems}
                </ul>
            </div>
            {/* <div className='navbar-end'>
            <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div> */}
        </div>
    );
};

export default Header;