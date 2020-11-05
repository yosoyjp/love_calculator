import React from 'react';
import './button.css';


const Button = ({children, classNames, onClick}) => (
    <button className={classNames} onClick={onClick} >
        {children}
    </button>
);


export default Button;