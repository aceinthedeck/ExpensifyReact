import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDom.render(<AppRouter/>,document.getElementById('app'));