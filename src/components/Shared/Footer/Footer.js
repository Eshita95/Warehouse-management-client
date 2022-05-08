import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer-container'>
            <div>
                <small>Copy Right &copy; by Eshita Islam</small>
            </div>
            <div>
                <p>MAIN MENU</p>
                <small>Home</small> <br />
                <small>Product</small> <br />
                <small>Gift Sets For Her</small> <br />
                <small>Gift Sets For Him</small>
            </div>
            <div>
                <p>QUICK VIEW</p>
                <small>Privacy Posmallcy</small><br />
                <small>Shipping Info</small><br />
                <small>Terms Of Service</small><br />
                <small>Refund Posmallcy</small>
            </div>
        </div>
    );
};

export default Footer;