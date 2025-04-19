import React from 'react';

import ItemsList from './ItemsList';



const Content = ({items,handleCheck
    ,handledetete
}) => {

 


    return (
        <main>
          {(items.length) ? (
          <ItemsList 
          items={items}
      
      handleCheck={handleCheck}
      handledetete={handledetete}
          
          />

        ) : (
            <p style={{marginTop: '2rem'}}>Your list is empty</p>
        )}
        
        </main>
    );
};

export default Content;