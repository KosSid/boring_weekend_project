import React from 'react';
import homeImg from '../../images/Home_img/Rectangle 5 (3).png'

import './style.scss'

const Home = () => {
    return (
        <div className={'home__container'}>
            <img className={'img__page'} src={homeImg} alt='home_img'/>
        </div>
    );
};

export default Home;