import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage=()=>(
    <div>This is dashboard</div>
);

const AddDashboardPage=()=>(
    <div>This is add expense</div>
);

const EditExpensePage=()=>(
    <div>This is add expense</div>
);  
const HelpPage=()=>(
    <div>This is add expense</div>
);

const NotFoundPage=()=>(
    <div>404</div>
); 

const Header=()=>(

    <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active">Home</NavLink>
    </header>
);


const routes=(
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
     <Route path="/" component={ExpenseDashboardPage} exact={true}/>
     <Route path="/create" component={AddDashboardPage}/>
     <Route path="/edit" component={EditExpensePage}/>
     <Route path="/help" component={HelpPage}/>
     <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
);

ReactDom.render(routes,document.getElementById('app'));