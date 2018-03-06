import React, {Component} from 'react';
import Header from '../components/Header';
import {Breadcrumb, Row, Col} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

const BannerAdd = (props) => {
    return (
        <div>
        <Header>
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <h1>Slide Banner <small>MJM Travel</small></h1>
                <ol className="breadcrumb">
                    <li>
                        <a href="/">
                        <i className="fa fa-dashboard" />Home</a>
                    </li>
                    <li><Link to="/slidebanner"><i className="fa fa-inbox" />Slide Banner</Link></li>
                    <li className="active">Tambah</li>
                </ol>
            </section>
            {/* Main content */}
            <section className="content container-fluid">
                <div className="container-fluid half-padding">
                <div className="template template__blank">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">Slide Banner Form Information</h3>
                        </div>
                        <form>							
                            <table className="table table-bordered">
                            <tbody>
                                <tr>
                                <th style={{width: 150}}>TITLE</th>
                                <td>
                                    <input type="text" className="form-control" name="title" defaultValue="" required/>									
                                </td>
                                </tr>
                                <tr style={{height: 50}}>
                                <th style={{width: 150}}>BANNER</th>
                                <td>
                                    <input type="file" name="banner" required />
                                    <p style={{fontWeight: 'bold', fontSize: 10, marginTop: 5}}>*(Hanya file dengan type .jpg dan kapasitas max. 200 Kb, ukuran file 768x766 px)</p>												
                                </td>
                                </tr>
                                <tr>
                                <th style={{width: 150}}>URUTAN</th>
                                <td>
                                    <input style={{width: 60, textAlign: 'center'}} type="number" className="form-control" name="order" defaultValue="" required/>										
                                </td>
                                </tr>
                                <tr>
                                <th style={{width: 150}}>STATUS</th>
                                <td>
                                    <select name="status" className="form-control" id="status" style={{width: 200, textAlign: 'center'}} required>
                                    <option value>Pilih Status Banner</option>
                                    <option value={1}>Aktif</option>
                                    <option value={0}>Tidak Aktif</option>
                                    </select>												
                                </td>
                                </tr>
                                <tr>
                                <th style={{width: 150}} />
                                <td colSpan={2} style={{width: 250}}>											
                                    <input type="submit" className="btn btn-primary" defaultValue="Submit" />
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* /.content */}
            </div>
        </Header>
        </div>
);
}
export default BannerAdd;
