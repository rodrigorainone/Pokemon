import React from 'react';
import { useState,useEffect } from 'react';
import ItemList from '../itemlist/ItemList';

const ItemListContainer = () => {
    
    const [producto,setproducto] = useState([]);
    const [Previos,setPrevios] = useState(null)
    const [Siguiente,setSiguiente] = useState(null)
    const [actual,setactual] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');

    useEffect(() => {
        
            fetch(actual)
            .then (res => res.json())
            .then(data =>{                
                const productsList = <ItemList products={data.results} />
                setproducto(productsList)  
                setPrevios(data.previous)
                setSiguiente(data.next)
                      }    )          
                       
               
                      
        }        
        ,[actual])
      
    return (
        <div>
            <div className="d-flex p-2 mt-5 gap-3 flex-wrap justify-content-center">
                {producto}

            </div>
            <div className="d-flex p-2 mt-5 gap-3 justify-content-center">
            <button onClick={()=>{if(Previos!=null){
                setactual(Previos)

            }}}>Previos</button>
             <button onClick={()=>{
                console.log(producto)
                if(Siguiente!=null){
                setactual(Siguiente)

            }}}>Next</button>
            </div>
            
        </div>
    );
}

export default ItemListContainer;
