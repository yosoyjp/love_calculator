import React from 'react';
import './image.css';

const Image = ({alt, src, classNames}) => (
    <img className={classNames} src={src} alt={alt} />
);

export default Image;