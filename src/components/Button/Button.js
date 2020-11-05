import React from 'react';
import './button.css';


const Button = ({children, classNames}) => (
    <button className={classNames} >
        {children}
    </button>
);


export default Button;