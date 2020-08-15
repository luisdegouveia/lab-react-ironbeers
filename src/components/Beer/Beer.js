import React, { Component } from 'react'
import axios from 'axios'

export class Beer extends Component {

    constructor(props) {
        super(props)
        //el estado inicial de ese componente (y de los inputs).
        this.state = {
            beers: {},
            //el id de la cerveza.
            id: this.props.match.params.BeerId
        }
    }

    //esto ejecuta el método get de axios.
    componentDidMount() {
        //usamos el metodo axios para conectarnos con el backend y enviar datos desde el frontend.
        //la ruta de donde nos conectamos, de donde sacaremos una cerveza especifica.
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.state.id}`)
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


                <div className="single-beer">
                    <img src={this.state.beer.image_url}/>
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

export default Beer