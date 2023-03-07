import React from 'react';
import Item from '../Item/Item';

const ItemList = ({products}) => {
    console.log(`aca estoy en item list : ${products}`)
    
    
    
    return (
        <>
           { products.map(  (pokemon,index) => <Item data={pokemon} key={index}/>)} 
        </>
    );
}

export default ItemList;
