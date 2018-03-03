import React, { Component } from 'react';
import Header from '../components/Header';
// import { Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem, Carousel, Image } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

class App extends Component {
    render() {
        return (
            <div>
                <Header>

                { /* Content Wrapper. Contains page content */ } 
                <div className="content-wrapper" > 
                    { /* Content Header (Page header) */ } 
                    <section className="content-header" >
                        <h1>Welcome<small>Have a nice day!</small></h1>
                        <ol className="breadcrumb" >
                            <li> <a href="#"><i className="fa fa-dashboard"/>Home</a></li>
                        </ol> 
                    </section> 
                    { /* Main content */ } 
                    <section className="content container-fluid">
                    </section> 
                    { /* /.content */ } 
                </div> 
                { /* /.content-wrapper */ }

                </Header>
            </div>
        );
    }
}

export default App;
