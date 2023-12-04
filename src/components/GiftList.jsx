import React, { useState } from 'react';
import './GiftList.css'
const GiftList = () => {
    const [gifts, setGifts] = useState([
        { id: 1, name: 'Gift' },
        { id: 2, name: 'Gift2' },
        { id: 3, name: 'Gift3' }
    ]);

    return (
        <div>
            <h2>Gift List</h2>
            <ul>
                {gifts.map(gift => (
                    <li key={gift.id}>{gift.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default GiftList;


