import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './UpdateDetails.css'

const UpdateDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [update, setUpdate] = useState({});

    useEffect(() => {
        const url = ` https://ancient-reef-62730.herokuapp.com/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdate(data))
    }, [])
    const handleUpdate = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;

        const update = { name, price, image, quantity, description };

        fetch(`https://ancient-reef-62730.herokuapp.com/service/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('user Update success')
                e.target.reset()
                navigate('/inventory');

            })
    }
    return (
        <div>
            <span>id:{id}</span>
            <div>
                <h2>update service : {update.name}</h2>
                <form onSubmit={handleUpdate}>
                    <input className='input-update' type="text" name="image" placeholder='url' /> <br />
                    <input className='input-update' placeholder='name' name='name' type="text" /><br />
                    <input className='input-update' placeholder='price' name='price' type="text" /><br />
                    <input className='input-update' placeholder='quantity' name='quantity' type="text" /><br />
                    <input className='input-update' placeholder='description' name='description' type="text" /><br />
                    <input className='input-update' type="submit" value='Update-User' />
                </form>
            </div>
        </div>
    );
};

export default UpdateDetails;