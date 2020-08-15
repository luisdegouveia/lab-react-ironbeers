import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

export class AllBeers extends Component {

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
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/`)
        .then(response => {
            this.setState({
                //despues de obtener los datos de la API. seteamos el estado de los inputs.
                beers: response.data,
                name: ""
            })
            console.log(this.state.beers)
        })
    }

    render() {
        return (
            <div className="container">

            </div>
        )
    }
}

export default AllBeers