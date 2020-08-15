import React, { Component } from 'react'
import axios from 'axios'

export class RandomBeer extends Component {

    constructor(props) {
        super(props)
        //el estado inicial de ese componente.
        this.state = {
            beers: []
        }
    }

    //esto ejecuta el método get de axios.
    componentDidMount() {
        //usamos el metodo axios para conectarnos con el backend y enviar datos desde el frontend.
        //la ruta de donde nos conectamos/a la que vamos a enviar la info.
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => {
            this.setState({
                //despues de obtener los datos de la API. seteamos el estado de los inputs.
                beer: response.data,
                name: ""
            })
            console.log(this.state.beer)
        })
    }

    render() {
        return(
            <div className="container">

                <div className="random-beer">
                    {/* <img src={this.state.beer.image_url}/> */}
                    <h4>{this.state.beer.name}</h4>
                    <p>{this.state.beer.tagline}</p>
                    <p>{this.state.beer.first_brewed}</p>
                    <p>{this.state.beer.attenuation_level}</p>
                    <p>{this.state.beer.description}</p>
                    <p>{this.state.beer.contributed_by}</p>
                </div>

            </div>
        )
    }

}

export default RandomBeer