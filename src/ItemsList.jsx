import React from 'react';
import LineItem from './lineItem';

const ItemsList = 
({ items, handleCheck, handledetete }
) => {
    return (
       <ul>
        {items.map((item) => (
<LineItem 
  item={item}
  key={item.id}
    handleCheck={handleCheck}
    handledetete={handledetete}
/>


        ))}
       </ul>
    );
};

export default ItemsList;