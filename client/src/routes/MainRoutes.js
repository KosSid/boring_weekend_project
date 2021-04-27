import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from '../pages/Home/index';
import Dashboard from '../pages/Dashboard/index';
import Places from '../pages/Places/index';
import Discard from '../pages/Discard/index';
import Settings from '../pages/Settings/index';
import WrongPage from "../pages/WrongPage";
import Questions from "../pages/Questions";

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/questions' component={Questions}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/places' component={Places}/>
            <Route exact path='/discard' component={Discard}/>
            <Route exact path='/settings' component={Settings}/>
            <Route exact path="*" component={WrongPage} />
        </Switch>
    );
};

export default MainRoutes;