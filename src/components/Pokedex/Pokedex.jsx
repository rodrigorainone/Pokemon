import React from 'react';
import { useEffect ,useState} from 'react';
import swal from 'sweetalert';





const Pokedex = () => {
    const [img,setimg] =useState('')
    const [loading,setloading]=useState(true)
    const [adivino,setadivino] = useState(false)
    const pokemonID= Math.floor(Math.random() * 149 + 1)
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
        .then (res => res.json())
        .then(data => {
            setimg(data)
            setloading(false)     
            console.log(data)     
         } )      
       
        
    }, []);

    
    return (
        <>            
            {loading?<p>loading...</p>:(<div className='ContenedorUno'>
            <div className="contenedorDos">                
                <img className={adivino?"imagenNormal":"imagenNegro"} src={img.sprites.other["official-artwork"].front_default}  alt=""  />
                <input type="text" name="nombrePoke" className="nombrePoke" onChange={(e)=>{
                        if(e.target.value===img.name){
                                setadivino(true)    
                                swal('Correcto'); 
                                setTimeout(() => {
                                    window.location.reload();     
                                }, 5000);
                                      
                        } 
                         else{
                                setadivino(false) 
                         }
               console.log(img.name)
               console.log(e.target.value)
            }
             } />
                <label htmlFor="nombrePoke"></label>
                
                <audio src='./audio/quien_es.mp3' autoPlay>
                    
                </audio>

            </div>
            </div>
           
            )}
        </>
    );
}

export default Pokedex;
