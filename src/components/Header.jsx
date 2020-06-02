import React, { Component } from 'react'

export default class Header extends Component {
    state = {
        styleHeader: ""
    }

    backgroundColorFunction = () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.setState({styleHeader: "#" + randomColor});
    }

    componentDidMount() {
       setInterval(this.backgroundColorFunction, 1000);
    }

    render() {
        return (
        <div className = "divHeader">
            <header style={{backgroundColor: this.state.styleHeader, opacity: 0.2}}></header>
            <p className="header">T-shirts d'en ville</p>
        </div>
        )
    }
}
