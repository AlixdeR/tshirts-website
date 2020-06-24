import React, { Component } from 'react';
import '../App.css';
import ThsirtBox from '../components/TshirtBox';
import teeshirts from "../teeshirts.json";
import CheckboxBrand from '../components/CheckboxBrand';
import ColorFilter from '../components/ColorFilter';

export default class Home extends Component {
    state = {
        allTees: teeshirts,
        brands: [],
        colors: [],
        tees: teeshirts, 
        myBasket: []
      }

      handleBasketClick = (teeshirt) => {
        let basket = [...this.state.myBasket]
        basket.push(teeshirt)
        this.setState({myBasket : basket})
        this.props.getBasketUp(teeshirt)
      }
    
      componentDidMount() {
        let currentBrands = [];
        this.state.tees.forEach(tee => {
          !currentBrands.includes(tee.brand) && currentBrands.push(tee.brand)
        })
        this.setState({brands: currentBrands});
    
        let currentColors = [];
        this.state.tees.forEach(tee => {
          !currentColors.includes(tee.color) && currentColors.push(tee.color)
        })
        this.setState({colors: currentColors});
      }
    

    
      render() {
        return (
                     
          <div className="main-body">
    
            <div className="side-bar">
    
              <div className="div-filter">
                <h3>Tri par marque</h3>
                {this.state.brands.map((brand, i) => <CheckboxBrand key={i} brand={brand}/>)}
              </div>
    
              <div className="div-filter">
                <h3>Tri par couleur</h3>
                <div className="colors-div">
                  {this.state.colors.map((color, i) => <ColorFilter key={i} color={color}/>)}
                </div>
              </div>
    
              <div className="div-filter">
                <h3>Tri par prix</h3>
                <input type="range" name="price" hidden></input>
              </div>
              
            </div>
    
            <div className="main-content">
              {this.state.tees.map((tee, i) => <ThsirtBox teeshirt={tee} key={i} handleBasketClick={this.handleBasketClick}/>)}
            </div>

          </div>
    )}
}   