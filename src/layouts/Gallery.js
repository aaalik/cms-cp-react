import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>Gallery<small>Have a nice day!</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li>
                                <a href=""><i className="fa fa-dashboard"/>Home</a>
                            </li>
                        </ol>
                    </section>
                    {/* Main content */}
                    <section className="content container-fluid"></section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>
        );
    }
}

export default Gallery;
