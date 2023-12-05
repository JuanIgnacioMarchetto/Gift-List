import React, { useState } from 'react';
import './GiftList.css'
const GiftList = () => {
    const [gifts, setGifts] = useState([
        { id: 1, name: 'Gift' },
        { id: 2, name: 'Gift2' },
        { id: 3, name: 'Gift3' }
    ]);

    return (
        <div className='paper'>
            <div className=''>
                <ul>
                    <h2>Gift List</h2>
                    {gifts.map(gift => (
                        <li key={gift.id}>{gift.name}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
};


export default GiftList;


