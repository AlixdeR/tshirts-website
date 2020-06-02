import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import ThsirtBox from './components/ThsirtBox';
import teeshirts from "./teeshirts.json";
import CheckboxBrand from './components/CheckboxBrand';
import ColorFilter from './components/ColorFilter';

export default class App extends Component {
  state = {
    allTees: teeshirts,
    brands: [],
    colors: [],
    tees: teeshirts
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
    this.setState({colors: currentColors})
  }

  handleColor = (color) => {
    let filteredTees = [...this.state.tees]
    let tempTees = filteredTees.filter(tee => tee.color === color);
    if(this.state.tees !== teeshirts) {
      tempTees.forEach(tee => {
        !filteredTees.includes(tee) && filteredTees.push(tee)
      })
        this.setState({tees: filteredTees})
     } else {
        this.setState({tees: tempTees})
      }
  }


  render() {
    return (
    <div>
      <Header />

      <div className="main-body">

        <div className="side-bar">

          <h3>Tri par marque</h3>
          {this.state.brands.map((brand, i) => <CheckboxBrand key={i} brand={brand} filterBrand={this.handleBrand}/>)}
          
          <h3>Tri par couleur</h3>
          <div className="colors-div">
            {this.state.colors.map((color, i) => <ColorFilter key={i} color={color} filterColor={this.handleColor}/>)}
          </div>

          <h3>Tri par prix</h3>
            <input type="range" name="price"></input>
          
        </div>

        <div className="main-content">
          {this.state.tees.map((tee, i) => <ThsirtBox teeshirt={tee} key={i}/>)}
        </div>
      </div>

      <footer><p>Made by Xe</p><FontAwesomeIcon className="icon-footer" icon={faLightbulb} /></footer>
    </div>
    )
  }
}

