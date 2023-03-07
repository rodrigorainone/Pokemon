import { useContext,createContext,useState } from "react";


const ModoDarkContext = createContext();

export const useModoDarkContext = () => useContext(ModoDarkContext);



export const ModoDarkProvider = (props) => {
    
    const [modoDark,setmodoDark] = useState(false);


    return (
        <ModoDarkContext.Provider value={{modoDark}}>
            {props.children}
        </ModoDarkContext.Provider>
    );
}

