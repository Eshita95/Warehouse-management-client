import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate();

    const navigateInventory = () => {
        navigate('/inventory')
    }

    const { _id, name, quantity, image, description, price, supplierName } = service;
    return (
        <div className='service-container'>
            <div>
                <img src={image} alt="" />
                <h3>Name: ${name}</h3>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Suplier Name:</strong> ${supplierName}</p>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <button onClick={navigateInventory}>Stock Update</button>
            </div>

        </div>

    );
};

export default Service;