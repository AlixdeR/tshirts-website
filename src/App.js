import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from './views/Home';
import Footer from './components/Footer';
import Basket from './views/Basket';

export default function App() {
  return (
    <div>
      <Header/>
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/your-basket" component={Basket} />
        </Switch>
      </BrowserRouter>
      
      <Footer/>
    </div>
  )
}


