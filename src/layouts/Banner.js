import React, { Component } from 'react';
import Header from '../components/Header';
import {Breadcrumb, Row, Col } from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import BannerAdd from './BannerAdd';


const Banner = (props) => {
    const {
        handleSubmit, handleSearch, message,
    } = props;
    const sld='/slidebanner';
    return (
        <div>
            <Header>
                { /* Content Wrapper. Contains page content */ } 
                <div className="content-wrapper" > 
                    { /* Content Header (Page header) */ } 
                    <section className="content-header" >
                        <h1>Slide Banner <small>MJM Travel</small></h1>
                        <Breadcrumb>
                            <IndexLinkContainer to="/"><Breadcrumb.Item><i className="fa fa-dashboard"/>Home</Breadcrumb.Item></IndexLinkContainer>
                            <Breadcrumb.Item active>Slide Banner</Breadcrumb.Item>
                        </Breadcrumb> 
                    </section> 

                    { /* Main content */ } 
                    <section className="content container-fluid">
                        <div className="container-fluid half-padding">
			                <div className="template template__blank">
                                <Row>
                                    <Col md={12}>
                                        <div className="box box-primary">
                                            <div className="box-header with-border">
                                                <h3 className="box-title">Filter Data</h3>
                                            </div>
                                            {/* form start */}
                                            <form onSubmit={handleSubmit} className="form-horizontal">
                                                <div className="box-body">
                                                    <Row>
                                                        <Col sm={3}>
                                                            <label htmlFor="exampleInputEmail1">Title</label>
                                                            <input type="text" name="title" defaultValue="" className="form-control" />
                                                        </Col>
                                                        <Col sm={3}>
                                                            <label htmlFor="exampleInputEmail1">Urutan</label>
                                                            <input type="number" name="order" defaultValue="" className="form-control" />
                                                        </Col>
                                                        <Col sm={3}>
                                                            <label htmlFor="exampleInputEmail1">Status</label>
                                                            <select name="status" className="form-control" id="status">
                                                                <option value>Pilih Status Banner</option>
                                                                <option value={1}>Aktif</option>                                                                    <option value={0}>Tidak Aktif</option>
                                                            </select>
                                                        </Col>
                                                    </Row>								
                                                </div>

                                                <div className="box-footer">
                                                    <button type="submit" className="btn btn-primary">
                                                        <i className="fa fa-search" /> Cari
                                                    </button>
                                                    &nbsp;&nbsp;
                                                    <Link className="btn btn-primary" to="/slidebanner">
                                                        <i className="fa fa-time" /> Clear Filter
                                                    </Link>
                                                    &nbsp;&nbsp;
                                                    <Link className="btn btn-primary" to={`${sld}/add`}>
                                                        <i className="fa fa-plus" /> Tambah Banner
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="box">
                                <div className="box-body table-responsive no-padding">
                                    <p style={{fontWeight: 'bold', textDecoration: 'underline', paddingTop: 5, paddingLeft: 10}}>Total Data : 0</p>
                                    <table className="table table-hover">
                                    <tbody><tr>
                                        <th className="text-center" width={130}>ACTION</th>
                                        <th className="text-center">TITLE</th>
                                        <th className="text-center">BANNER</th>
                                        <th className="text-center">URUTAN</th>
                                        <th className="text-center">STATUS</th>
                                        </tr>
                                        <tr>
                                        <td width={130}>
                                            <a href="/slidebanner/detail?id=1">
                                            <button className="btn btn-block btn-default btn-sm">
                                                <i className="fa fa-eye" /> View Detail
                                            </button>
                                            </a>
                                        </td>
                                        <td className="text-center">SATU</td>
                                        <td className="text-center"><img width={150} height={50} src="/asset/banner/" /></td>
                                        <td className="text-center">1</td>
                                        <td className="text-center">1</td>									
                                        </tr>
                                    </tbody></table>
                                </div>
                                {/* /.box-body */}
                                </div>

                            </div>
                        </div>
                    </section> 
                    { /* /.content */ } 
                </div> 
                { /* /.content-wrapper */ }
            </Header>
        </div>
    );
}

export default Banner;
