import React from 'react';
import './style.scss';

const withIconButton = (Icon, handleButton) => {
    return ({color, fontSize}) => {
        return (
            <button type='button' className={'questionButton-container'} onClick={handleButton}>
                <Icon style={{color, fontSize}} />
            </button>
        );
    }
}
export default withIconButton;