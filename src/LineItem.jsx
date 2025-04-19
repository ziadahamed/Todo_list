
import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ item, handleCheck, handledetete}) => {

    return (
         <li className='item' key={item.id}>
                                    <input type="checkbox"
                                    onChange={() => handleCheck(item.id)}
                                    checked= {item.checked} />
                                    <label style={(item.checked)?{textDecoration: 'line-through'}: null} onDoubleClick={() => handleCheck(item.id)} 
                                    > {item.item}</label>
                                    <FaTrashAlt 
                                    role='button'
                                    onClick={() => handledetete(item.id)}
                                    tabIndex="0" />
                                </li>
        
    );
};

export default LineItem;