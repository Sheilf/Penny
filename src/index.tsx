import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignInScreen from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Tech, Financial, Health, Retail, Industrial, Property } from './routes/Routes';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

      



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Route exact path="/" component={SignInScreen}></Route>
      <Route exact path="/technology" component={Tech}></Route>
      <Route exact path="/financial" component={Financial}></Route>
      <Route exact path="/health" component={Health}></Route>
      <Route exact path="/retail" component={Retail} />
      <Route exact path="/industrial" component={Industrial}></Route>
      <Route exact path="/property" component={Property}></Route>

  
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
