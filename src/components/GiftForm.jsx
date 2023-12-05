import React, { useState } from 'react';
import AddButton from './Button';
import './GiftForm.css';

const GiftForm = ({ onAddGift }) => {
    const [newGift, setNewGift] = useState('');

    const handleChange = (e) => {
        setNewGift(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newGift.trim() !== '') {
            onAddGift(newGift);
            setNewGift('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add Gift
                <input type="text" value={newGift} onChange={handleChange} />
            </label>
            <AddButton onClick={handleSubmit} />
        </form>
    );
};

export default GiftForm;
