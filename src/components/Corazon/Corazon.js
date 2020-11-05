import React from 'react';

import './corazon.css';
import Image from '../Image/Image';
import Typography from '../Typography/Typography';
import CorazonImage from '../../assets/images/corazon.png';

const Corazon = ({percentage}) => (
    <div className="heart-image-container" >
        <Image src={CorazonImage} classNames="heart-image" />
        <div className="heart-image-container-result" >
            <Typography type="span" text={percentage} classNames="result-heart-percentage"/>
            <Typography type="span" text="%" classNames="symbol-heart-percentage" />
        </div>
    </div>
);

export default Corazon;