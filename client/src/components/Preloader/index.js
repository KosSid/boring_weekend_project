import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './style.scss';

function Preloader() {
    return (
        <div className={'preloader-container'}>
            <Loader
                type="Puff"
                color='rgba(78, 78, 78, 1)'
                height={100}
                width={100}
            />
        </div>
    );
}
export default Preloader;