import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../layouts/App';
import Banner from '../layouts/Banner';
import Gallery from '../layouts/Gallery';
import Paket from '../layouts/Paket';
import Password from '../layouts/Password';

/**
* @param exact in order for not being followed with bellow routes
*/

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/slidebanner" component={Banner} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/paket" component={Paket} />            
            <Route path="/changepassword" component={Password} />            
        </div>
    </Router>
);

export default Routes;