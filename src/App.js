import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from './views/Home';
import Footer from './components/Footer';
import Basket from './views/Basket';
import NavBar from './components/NavBar';

export default class App extends Component {

  state = {
    myBasket : []
  }

  render() {
    return (
      <div>
        <Header/>
        <NavBar/>
        
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(routeProps)=>(<Home {...routeProps} getBasketUp={this.getBasketUp}/>)} />
            <Route path="/mon-panier" component={Basket} />
          </Switch>
        </BrowserRouter>
        
        <Footer/>
      </div>
      )
    }
  }