import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';


const addExpense =(description='', note='',amount=0,createdAt=0)=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
});

const expenseReducerDefaultState=[];

const expensesReducer=(state=expenseReducerDefaultState,action)=>{

    switch(action.type){

        case 'ADD_EXPENSE':
           return [...state,action.expense];
        
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id!=action.id);

        default:
            return state;
    }

};

const filterReducerDefaultState={
    text:'',
    sortyBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer=(state=filterReducerDefaultState,action)=>{

    switch(action.type){
        default:
            return state;
    }

};

const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);

store.subscribe(()=>{
    console.log(store.getState());
});

const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100}));
const expenseTwo=store.dispatch(addExpense({description:'Coffee',amount:300}));

store.dispatch(removeExpense({id:expenseOne.expense.id}));