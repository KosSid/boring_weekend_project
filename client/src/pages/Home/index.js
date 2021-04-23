import React from 'react';
import homeImg from '../../sources/images/Home_img/home_img.png';
import {AiFillHeart, AiOutlineClose, AiOutlineQuestion} from "react-icons/ai";

import './style.scss'

const Home = () => {

    const closeIconHandle = () => {
        console.log('icon closed');
    }

    const maybeIconHandle = () => {
        console.log('maybe icon');
    }

    const heartIconHandle = () => {
        console.log('heart icon');
    }

    return (
        <div className={'app-container'}>
            <div className={'content-container'}>
                <div className={'home__container'}>
                    <div className={'home__card'}>
                        <img className={'home__img__page'} src={homeImg} alt='home_img'/>
                        <div className={'home__card_circle_container'}>
                            <div className={'home__card__message'}>
                                <h2>Do you like?</h2>
                                <h1><strong>SIGHTSEEING</strong></h1>
                            </div>
                            <div className={'home__circle__container'}>
                                <div className={'home__circle'} onClick={closeIconHandle}>
                                    <AiOutlineClose className={'Close-icon'}/>
                                </div>
                                <div className={'home__circle'} onClick={maybeIconHandle}>
                                    <AiOutlineQuestion className={'Maybe-icon'}/>
                                </div>
                                <div className={'home__circle'} onClick={heartIconHandle}>
                                    <AiFillHeart className={'Heart-icon'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'home__message'}>
                        <div className={'home__message'}>
                            <h2>Do you like?</h2>
                            <h1><strong>SIGHTSEEING</strong></h1>
                            <div>
                                <p>Arhitecture</p>
                                <p>Culture</p>
                                <p>Parks</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Home;