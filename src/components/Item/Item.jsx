import React from 'react';
import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ({data}) => {

    const [unPokemon,setunPokemon] = useState([]);
    const [loading,setloading] = useState (true);
   
    useEffect(() => {
        const ruta = data.url
        fetch(`${ruta}`)
        .then (res => res.json())
       .then(poke =>{
        setunPokemon(poke)
        setloading(false)
                      }) }        
    ,[data])
    console.log(unPokemon)
    return (
        <>
            {loading?<p>loading...</p>:(<div className="card" style={{width: '20rem'}}>
            <img className="card-img-top"  src={unPokemon.sprites.other["official-artwork"].front_default} alt="pokemon" />
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link className="btn btn-primary">Go somewhere</Link> 
  </div>
</div>
)}
         

            

        </>
       
    );
}

export default Item;
