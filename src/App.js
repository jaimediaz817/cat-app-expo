import Card from './components/Card';
import Select from './components/Select';
import getCat from './services/getCat';
import { useState, useEffect } from 'react';

const objInitialCat = {
    image: "https://www.animalandia0.com/wp-content/uploads/2019/06/bosque-noruego4-900x425.jpg",
    breed: {
        id: 1,
        name: "gao por defecto app component"
    }
}

function App() {

    const [cat, seCat] = useState(objInitialCat);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        updateCat();
    }, []);

    // Carga un gato por defecto sin hacer uso del SELECT
    const updateCat = (breedId) => {
        setLoader(true)
        getCat(breedId)
            .then( (cat) => {
                // console.log("GATO POR DEFECTO DESDE APP ", cat)
                seCat(cat);
                setLoader(false)
            })
            .catch(error => {
                setLoader(false)
                console.log(error);
            })
    }

    return (
        <div className="app">
            <Select updateCat={updateCat} />
            <Card cat={cat} loader={loader} />            
        </div>
    );
}

export default App;
