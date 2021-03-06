import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem=({dispatch,id,description,amount,createdAt})=>(
    <div>
        <Link to={`/edit/${id}`}>
   <h1>{description}</h1>
    </Link>
   
    <button onClick={()=>{

        dispatch(removeExpense({id}));

    }}>Remove</button>
    </div>
);



export default connect()(ExpenseListItem);