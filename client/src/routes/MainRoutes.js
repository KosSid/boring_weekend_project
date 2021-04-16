import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from '../pages/Home/index'
import Dashboard from '../pages/Dashboard/index'
import Places from '../pages/Places/index'
import Discard from '../pages/Discard/index'
import Settings from '../pages/Settings/index'

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/places' component={Places}/>
            <Route exact path='/discard' component={Discard}/>
            <Route exact path='/settings' component={Settings}/>
            <Route exact path="*" render={() => <h1>You are on the wrong page</h1>} />
        </Switch>
    );
};

export default MainRoutes;