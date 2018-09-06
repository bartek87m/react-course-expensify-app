import React from 'react';
import {Link} from 'react-router-dom';
 
export const ExpenseListItem = ({id ,description, amount, createdAd}) => {//destrukturyzacja
    console.log(createdAd);
    return (
    <div>
        <Link to={`/edit/${id}`}>              
             <h3>Description: {description}</h3>
       </Link>
        <p> {createdAd} - {amount}</p> 
   
    </div>
    )
}

export default ExpenseListItem;