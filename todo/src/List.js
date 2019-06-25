import React from 'react';

const printItems = (items) => {
  return items.map( item => <li>{item}</li>)
}

export default ({items, numberOfItems}) =>{
    console.log(items)
    console.log(numberOfItems)

    return (
    	<ul>
        {printItems(items)}
    	</ul>
    );
}


