import React from 'react';
import homeImg from '../../images/Home_img/home_img.png'

import './style.scss'

const Home = () => {
    return (
        <div className={'home__container'}>
            <div className={'home__card'}>
                <img className={'home__img__page'} src={homeImg} alt='home_img'/>
                <div className={'home__circle__container'}>
                    <div className={'home__circle'}>icon</div>
                    <div className={'home__circle'}>icon</div>
                    <div className={'home__circle'}>icon</div>
                </div>
            </div>

        </div>
    );
};

export default Home;