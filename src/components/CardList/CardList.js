import React from 'react'
import Card from '../Card/Card'

const CardList = ({robots})=>{
    console.log('cardList');
    const cardArray = robots.map((item,i)=>{
        return (
            <Card 
            key={robots[i].id} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}    
            />
        );
    })
    return(
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;