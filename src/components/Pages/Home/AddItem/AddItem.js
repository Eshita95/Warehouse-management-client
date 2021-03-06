import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AddItem.css';

const AddItem = () => {
    const navigate = useNavigate()
    const handleUpdate = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const suppler = e.target.suppler.value;

        const addItem = { image, name, price, quantity, suppler };

        fetch('https://ancient-reef-62730.herokuapp.com/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('Add Items Success')
                navigate('/inventory')
            })
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input className='input-field' placeholder='url' name='image' type="text" /><br />
                <input className='input-field' placeholder='name' name='name' type="text" /><br />
                <input className='input-field' placeholder='price' name='price' type="text" /><br />
                <input className='input-field' placeholder='quantity' name='quantity' type="text" /><br />
                <input className='input-field' placeholder='description' name='description' type="text" /><br />
                <input className='input-field' placeholder='suppler_name' name='suppler' type="text" /><br />
                <input className='input-field' type="submit" value='Add-User' />
            </form>
        </div>
    );
};

export default AddItem;