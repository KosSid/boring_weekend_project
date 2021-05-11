import React from 'react';
import withAppContentWrapper from "../../hoc/withAppContentWrapper";
import {useSelector} from "react-redux";
import './style.scss'

const Home = () => {
    const user = useSelector(state => state.user.isAuthenticated)
    return (
        <div>HOME Page {user && 'You are logged in'}</div>
    );
};

export default  withAppContentWrapper(Home);