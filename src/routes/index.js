import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import app from '../containers/app';
import banner from '../containers/banner';
import gallery from '../containers/gallery';
import paket from '../containers/paket';
import password from '../containers/password';
import bannerAdd from '../containers/bannerAdd';

/**
* @param exact in order for not being followed with bellow routes
*/

const Routes = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={app}/>
                <Route exact path="/slidebanner" component={banner}/>
                <Route path="/gallery" component={gallery} />
                <Route path="/paket" component={paket} />            
                <Route path="/changepassword" component={password} />  
                <Route exact path="/slidebanner/add" component={bannerAdd}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;