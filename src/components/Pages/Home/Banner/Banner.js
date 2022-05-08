import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div>
                <h1>Perfume WareHouse</h1>
                <p>Stock Perfume is a high quality perfume wholesaler that offers a wide range of beauty products.

                    We offer the ability to deal with the management of multi-products and multi-references.
                    So you can find all the products you are looking for in one website.
                    You no longer have to place orders on several websites!</p>
            </div>
            <div>
                <img src="https://img.freepik.com/free-photo/aromatic-perfume-bottles-background_488220-23808.jpg?w=740" alt="" />
            </div>
        </div>
    );
};

export default Banner;