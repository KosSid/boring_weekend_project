import React from 'react';
import './style.scss';

const withAppContentWrapper = (Component) => {
    return () => {
        return (
            <div className={'app-container'}>
                <div className={'content-container'}>
                    <Component />
                </div>
            </div>
        );
    }
}
export default withAppContentWrapper;