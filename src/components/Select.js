import React, { useState, useEffect } from 'react';
import getBreeds from './../services/getBreeds';

const objInitialBreeds = [
    {
        id: 1,
        name: "raza por defecto"
    },
    {
        id: 2,
        name: "raza por defecto 2"
    }        
];

const Select = ({ updateCat }) => {

    const [breeds, setBreeds] = useState(objInitialBreeds);

    useEffect(() => {
        // se eejcuta una vez se cargue/renderice la pagina
        updateBreeds();
    }, []);

    const updateBreeds = () => {
        getBreeds()
            .then((breedsIn) => {
                console.log("RESPUESTA DE LA API: ", breedsIn);
                setBreeds(breedsIn);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const hlandleChange = (breedId) => {
        updateCat(breedId);
    }

    return (
        <select onChange={ (e) => hlandleChange(e.target.value) }>
            { breeds && breeds.map((breed) => {
                return <option value={ breed.id } key={breed.id}> {breed.name} </option>
            }) }            
        </select>
    );
}

export default Select;
