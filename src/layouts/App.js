import React from 'react';
import {Col, Panel, Button} from 'react-bootstrap';
// import { Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem, Carousel, Image } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

class App extends React.Component {
    render() {
        const {testApi, data} = this.props;
        // console.log(data+'lay');
        return (
            <div>
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
                        <div>
                            <Col xs={5} md={5} lg={5}>
                                <Panel bsStyle="primary">
                                    <Panel.Heading>Test Connection to API</Panel.Heading>
                                    <Panel.Body>
                                        {data.message === '' ?
                                            'Hey you there, Call Me ! (┛◉Д◉)┛┻━┻' : data.message
                                            || 'Hey calm down!, check the API server!' }
                                        <br />
                                        {data.database === '' ?
                                            '' : data.database
                                            || 'Internal server error.'}
                                    </Panel.Body>
                                </Panel>
                                <Button bsStyle="primary" onClick={testApi}>
                                    Test API Connection
                                </Button>
                            </Col>
                        </div>
                    </section> 
                    { /* /.content */ } 
                </div> 
                { /* /.content-wrapper */ }

            </div>
        );
    }
}


export default App;
