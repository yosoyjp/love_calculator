import React from 'react';

const Typography = ({type, classNames, text}) => {
    switch(type){
        case 'title':
            return (
                <h1 className={classNames} >{text}</h1>
            );
        case 'subtitle':
            return (
                <h3 className={classNames} >{text}</h3>
            );
        case 'paragraph':
            return (
                <p className={classNames} >{text}</p>
            );
        case 'span':
            return (
                <span className={classNames} >{text}</span>
            );
        default:
            return <label className={classNames} >{text}</label>
    }
}

export default Typography;