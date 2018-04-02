import React from 'react';
import { Nav, NavItem } from 'react-bootstrap'; 
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

function Header(props) {
        return (
            <div >
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
                        <Nav className="sidebar-menu" data-widget="tree">
                            <NavItem className="header">MAIN MENU</NavItem>
                            {/* Optionally, you can add icons to the links */}

                            <IndexLinkContainer to="/">
                                <NavItem>
                                    <i className="fa fa-dashboard"/><span>Dashboard</span>    
                                </NavItem>
                            </IndexLinkContainer>
                            <LinkContainer to="/slidebanner">
                                <NavItem>
                                    <i className="fa fa-image"/><span>Slide Banner</span>
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/paket">
                                <NavItem>
                                    <i className="fa fa-paper-plane"/><span>Paket</span>
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/gallery">
                                <NavItem>
                                    <i className="fa fa-image"/><span>Gallery</span>
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/changepassword">
                                <NavItem>
                                    <i className="fa fa-key"/><span>Change Password</span>
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                        {/* /.sidebar-menu */}
                    </section>
                    {/* /.sidebar */}
                </aside >

                
            </div>
        );
 
}

export default Header;
