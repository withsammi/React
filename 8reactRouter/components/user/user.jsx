import { useParams } from 'react-router-dom';
import React from 'react';

const User = () => {
    const {userId} = useParams();
    return (
        <div className='bg-amber-600 flex items-center justify-around
'>
            <h1>user = {userId}</h1>
        </div>
    );
}

export default User;
