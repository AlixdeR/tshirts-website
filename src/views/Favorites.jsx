import React, { Component }  from 'react'
import ls from 'local-storage';
import FavItem from '../components/FavItem';

export default class Favorites extends Component {
    state = {
        myFav: []
    }

    handleBasketClick = (teeshirt) => {
        this.props.getBasketUp(teeshirt)
    }

    componentDidMount(){
        fetch("http://localhost:3000/")
            .then(response => {
                response.json();
                })
            .then(() => this.setState({ myFav: ls.get('myFav') || []}))
            .catch(err => console.log(err))
    }

    deleteElem = (elem) => {
        let fav = [...this.state.myFav]
        let newFav = fav.filter(e => e.name!==elem.name)
        this.setState({myFav: newFav})
        ls.set('myFav', newFav)
    }

    render() {
    return (
        <div>
            <h3 className="page-title">Mes favoris</h3>
            <div className="fav-list">
                {this.state.myFav.map((elem,i) => 
                    <FavItem teeshirt={elem} key={i} deleteElem={this.deleteElem} handleBasketClick={this.handleBasketClick}/> 
                )}
            </div>
            
        </div>
    )
}
}
