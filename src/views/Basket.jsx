import React, { Component } from 'react';
import ls from 'local-storage'
import BasketItem from '../components/BasketItem';

export default class Basket extends Component {
    state = {
        myBasket: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/")
            .then(response => {
                response.json();
                })
            .then(() => this.setState({ myBasket: ls.get('myBasket') || []}))
            .catch(err => console.log(err))
    }

    deleteElem = (elem) => {
        let basket = [...this.state.myBasket]
        let newBasket = basket.filter(e => e.name!==elem.name)
        this.setState({myBasket: newBasket})
        ls.set('myBasket', newBasket)
    }

    handleQuantityMinus = (elem) => {
        let basket = [...this.state.myBasket]
        for(let i=0; i<basket.length; i++) {
            if(basket[i]===elem  && basket[i].qty>1) {
                basket[i].qty --;
                this.setState({myBasket: basket});
                ls.set('myBasket', basket)
            } else if (basket[i]===elem && basket[i].qty===1) {
                let newBasket = basket.filter(e => e!==basket[i]);
                console.log(newBasket)
                this.setState({myBasket: newBasket});
                ls.set('myBasket', newBasket)
            }
        }
    }

    handleQuantityPlus = (elem) => {
        let basket = [...this.state.myBasket]
        for(let i=0; i<basket.length; i++) {
            basket[i]===elem && basket[i].qty ++
        }
        this.setState({myBasket: basket})
        ls.set('myBasket', basket)
    }
        
    render() {

    return (
        <div className="basket-page">
            <h3 className="page-title">Mes articles</h3>
            <ul className="basket-list">
                {this.state.myBasket.map((elem,i) => 
                    <BasketItem elem={elem} key={i} deleteElem={this.deleteElem} handleQuantityMinus={this.handleQuantityMinus} handleQuantityPlus={this.handleQuantityPlus}/> 
                )}
            </ul>
            <hr className="total-hr"/>
            <p>Total = {this.state.myBasket.reduce((sum, el) => (
                sum += Number(el.qty) * Number(el.price)
                ), 0)}€
            </p>
            <button className="btn">Je passe commande!</button>
        </div>
    )
    }
}

