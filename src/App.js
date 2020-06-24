import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from './views/Home';
import Footer from './components/Footer';
import Basket from './views/Basket';
import NavBar from './components/NavBar';
import ls from 'local-storage';

export default class App extends Component {

  state = {
    myBasket : []
  }

  getBasketUp = (teeshirt) => {
    let newBasket = [...this.state.myBasket]
    newBasket.push(teeshirt)
    console.log(this.state.myBasket)
    this.setState({myBasket: newBasket})
    ls.set("myBasket", newBasket);
  }

 componentDidMount() {
   fetch("http://localhost:3000/")
        .then(response => {
          response.json();
        })
        .then(() => this.setState({ myBasket: ls.get('myBasket') || [] }))
        .catch(err => console.log(err))
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