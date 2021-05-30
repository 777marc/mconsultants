import React from 'react';
import './App.css';

export default () => {
    return (
        <>
            <div className="wrapper"
                style={{ 
                    backgroundImage: "url(/img/home.jpg)",
                    height: '100vh',
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    opacity: '0.2'

                }}>
            </div>
            <div className="center">
                <h1>mconsultants</h1>
            </div>

        </>
    );
};