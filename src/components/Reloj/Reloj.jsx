import React from 'react';
import { useEffect,useState } from 'react';
import RelojHora from './RelojHora/RelojHora';

const Reloj = () => {       
    const [hora, sethora] = useState(new Date().toLocaleTimeString());
    const [visit,setvisit] = useState(false);   

    useEffect (()=>{         
            let temporizador;
            if (visit){
                temporizador = setInterval(() => {
                    sethora(new Date().toLocaleTimeString())
                }, 1000);
            }
            else{
                clearInterval(temporizador)
            }

    },[visit]);


    return (
        <>
             {visit && <RelojHora hora={hora}/>}
             <button onClick={()=>setvisit(true)}>prender</button>
             <button onClick={()=>setvisit(false)}>apagar</button>
            
        </>
    );
}

export default Reloj;
