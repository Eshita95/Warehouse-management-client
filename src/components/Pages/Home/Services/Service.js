import React from 'react';

const Service = ({service}) => {
    const {_id, name, quantity, image, description, price} = service;
    return (
        <div className='service-container'>
            <img src={image} alt="" />
        </div>
    );
};

export default Service;