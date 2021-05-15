import React from 'react';
import Loader from './Loader/Loader';

const Card = ({ cat, loader }) => {
    
    console.log("desde card :  ", cat)

    if (loader) {
        return <Loader />
    }

    return (
        <div className="card">
            <img src={cat.image} alt={cat.breed && cat.breed.name} />
            <p>{ cat.breed && cat.breed.name }</p>
        </div>
    );
}

export default Card;
