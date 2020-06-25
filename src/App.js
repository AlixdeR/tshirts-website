import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from './views/Home';
import Footer from './components/Footer';
import Basket from './views/Basket';
import NavBar from './components/NavBar';
import ls from 'local-storage';
import Favorites from './views/Favorites';

export default class App extends Component {

  state = {
    myBasket : [],
    myFav: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/")
               .then(response => {
                 response.json();
               })
               .then(() => this.setState({ myBasket: ls.get('myBasket') || [], myFav: ls.get('myFav') || [] }))
               .catch(err => console.log(err))
  }

  getBasketUp = (teeshirt) => {
    let basket = [...this.state.myBasket];
    let filteredBasket = basket.filter(e => e.name===teeshirt.name)
    if(filteredBasket.length===1) {
      for(let i=0; i<basket.length; i++) {
        basket[i]===filteredBasket[0] && basket[i].qty ++;
      }
    } else {
      teeshirt.qty = 1;
      basket.push(teeshirt);
    }

    this.setState({myBasket: basket})
    ls.set('myBasket', basket)
  }

  getFavUp = (teeshirt) => {
    let fav = [...this.state.myFav];
    let filteredFav = fav.filter(e => e.name===teeshirt.name)
    filteredFav.length===0 && fav.push(teeshirt);
    this.setState({myFav: fav})
    ls.set("myFav", fav);
  }

  render() {
    return (
      <div>
        <Header/>
        <NavBar/>
        
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(routeProps)=>(<Home {...routeProps} getBasketUp={this.getBasketUp} getFavUp={this.getFavUp}/>)} />
            <Route path="/mon-panier" component={Basket} />
            <Route path="/mes-favoris" render={(routeProps)=>(<Favorites {...routeProps} getBasketUp={this.getBasketUp}/>)} />
          </Switch>
        </BrowserRouter>
        
        <Footer/>
      </div>
      )
    }
  }