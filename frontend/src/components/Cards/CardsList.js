import React from 'react';
import Cards from "./Cards.js";

const CardsList = () =>{

    let CardsListArr =[];
    for (let i = 0; i < 10; i++){
    CardsListArr.push(<Cards key = {i}/>);
    }

    return(
        CardsListArr
    );
}

export default CardsList;