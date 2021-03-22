import React from 'react';

//components imported
import Singleitem from '../Components/Singleitem/Index';
import Title from '../Components/Title/Index';

const Item = (props) => {

   const id = props.match.params.id ;

    //running
    return (
        <div className='container'>
            <Title title="Item" />
            <Singleitem  id = {id}/>
        </div>
    )
}

export default Item
