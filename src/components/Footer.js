import React from 'react';

function Footer() {
        return (
            <div>
                {/* Main Footer */}
                <footer className="main-footer">
                    {/* To the right */}
                    <div className="pull-right hidden-xs">Anything you want</div>
                    {/* Default to the left */}
                    <strong>
                        Copyright© 2018
                        <a href="">Anton</a>.</strong>
                    All rights reserved.
                </footer>
            </div>
        );
 
}

export default Footer;
