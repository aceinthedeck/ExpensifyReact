import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFiter, setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store=configureStore();

store.dispatch(addExpense({description:'Water bill'}));
store.dispatch(addExpense({description:'Gas bill'}));
store.dispatch(setTextFilter('bill'));

const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

console.log(store.getState());

const jsx=(
    <Provider store={store}>
     <AppRouter/>
    </Provider>
   
);

ReactDom.render(jsx,document.getElementById('app'));