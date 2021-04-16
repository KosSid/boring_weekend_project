import React from 'react';
import './style.scss'

const ErrorBoundaryPage = ({errorInfo, error}) => {
    return (
        <div className={'ErrorBoundaryPage__container'}>
            <div className={'ErrorBoundaryPage__erBlock'} >
                <h1>Oops, something went wrong :(</h1>
                <p><strong>The error:</strong> {error.toString()}</p>
                <p><strong>Where it occured:</strong> {errorInfo.componentStack}</p>
            </div>
        </div>
    );
}

export default ErrorBoundaryPage;