import React, {Component} from 'react';
// import { Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem, Carousel,
// Image } from 'react-bootstrap'; import { LinkContainer } from
// 'react-router-bootstrap';

function Header(props) {
        return (
            <div className="wrapper">
                {/* Main Header */}
                <header className="main-header">
                    {/* Logo */}
                    <a href="/" className="logo">
                        {/* mini logo for sidebar mini 50x50 pixels */}
                        <span className="logo-mini">
                            <b>MJM</b>
                        </span>
                        {/* logo for regular state and mobile devices */}
                        <span className="logo-lg">
                            <b>MJM</b>Travel</span>
                    </a>
                    {/* Header Navbar */}
                    <nav className="navbar navbar-static-top" role="navigation">
                        {/* Sidebar toggle button*/}
                        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                        {/* Navbar Right Menu */}
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                {/* User Account Menu */}
                                <li className="dropdown user user-menu">
                                    {/* Menu Toggle Button */}
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        {/* The user image in the navbar*/}
                                        <img
                                            src="/assets/img/user2-160x160.jpg"
                                            className="user-image"
                                            alt="User Image"/> {/* hidden-xs hides the username on small devices so only the image appears. */}
                                        <span className="hidden-xs">Alik</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        {/* The user image in the menu */}
                                        <li className="user-header">
                                            <img
                                                src="/assets/img/user2-160x160.jpg"
                                                className="img-circle"
                                                alt="User Image"/>
                                            <p>Alik<small>Member since Jan. 2018</small>
                                            </p>
                                        </li>
                                        {/* Menu Footer*/}
                                        <li className="user-footer">
                                            <div className="pull-right">
                                                <a href="/logout" className="btn btn-default btn-flat">Sign out</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                {/* Left side column. contains the logo and sidebar */}
                <aside className="main-sidebar">
                    {/* sidebar: style can be found in sidebar.less */}
                    <section className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img
                                    src="/assets/img/user2-160x160.jpg"
                                    className="img-circle"
                                    alt="User Image"/>
                            </div>
                            <div className="pull-left info">
                                <p>Alik</p>
                                {/* Status */}
                                <a href="#"><i className="fa fa-circle text-success"/>
                                    Online</a>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN MENU</li>
                            {/* Optionally, you can add icons to the links */}
                            <li>
                                <a href="/slidebanner"><i className="fa fa-image"/>
                                    <span>Slide Banner</span>
                                </a>
                            </li>
                            <li>
                                <a href="/paket"><i className="fa fa-paper-plane"/>
                                    <span>Paket</span>
                                </a>
                            </li>
                            <li>
                                <a href="/gallery"><i className="fa fa-image"/>
                                    <span>Gallery</span>
                                </a>
                            </li >
                            <li>
                                <a href="/user/changepassword"><i className="fa fa-key"/>
                                    <span>Change Password</span>
                                </a>
                            </li >
                        </ul>
                        {/* /.sidebar-menu */}
                    </section>
                    {/* /.sidebar */}
                </aside >

                {props.children}

                {/* Main Footer */}
                <footer className="main-footer">
                    {/* To the right */}
                    <div className="pull-right hidden-xs">Anything you want</div>
                    {/* Default to the left */}
                    <strong>
                        Copyright© 2018
                        <a href="#">MJM Travel</a>.</strong>
                    All rights reserved.
                </footer>
            </div>
        );
 
}

export default Header;
