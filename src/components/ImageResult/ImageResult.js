import React from 'react';

import './imageResult.css';
import Image from '../Image/Image';
import AloneIma from '../../assets/images/alone.jpeg';
import FriendZoneIma from '../../assets/images/friendzone.jpeg';
import RomanticIma from '../../assets/images/romantic.jpeg';

const getImage = (type) => {
    switch(type){
        case 'alone':
            return AloneIma;
        case 'romantic':
            return RomanticIma;
        default:
            return FriendZoneIma;
    }
}

const BackgroundResult = ({type}) => (
        <Image src={getImage(type)} classNames="image-background-result" />
    );

export default BackgroundResult;