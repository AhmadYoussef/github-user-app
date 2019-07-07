import React from 'react';
import Card from './card';

const CardList = (props) =>{
    return(
        <div>
            {props.Profile.map((Items,index) => <Card click={props.click} index={index} key={Items.id} {...Items} />)}
        </div>
    );
}

export default CardList;