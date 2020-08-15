import React, { Component } from 'react'
import axios from 'axios'

export class NewBeer extends Component {

    constructor(props) {
        super(props)
        //el estado inicial de ese componente (y de los inputs).
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: "",
        }
    }

    //a medida que el usuario escribe se guardan los valores de los inputs en el estado.
    handleChange = (event) => {
        //el name corresponde con el name del formulario.
        this.setState({
            //actualizamos los valores en el estado.
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        //para prevenir el estado predeterminado del formulario.
        event.preventDefault()
        //usamos el metodo axios para conectarnos con el backend y enviar datos desde el frontend.
        //la ruta de donde nos conectamos/a la que vamos a enviar la info.
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
        .then(response => {
            //despues de tomar los datos hacemos un push para agregarlos a la lista de cervezas.
            this.props.history.push(`/beers`);
        })
    }

    render() {
        return (
            <div className="container">

            {/* llamamos al metodo handleSubmit */}
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                        {/* llamamos al metodo handleChange */}
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label>Tagline:</label>
                        <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange} />

                    <label>Description:</label>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />      
                
                    <label>First Brewed:</label>
                        <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} />
                
                    <label>Brewers Tips:</label>
                        <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange} />
                
                    <label>Attenuation level:</label>
                        <input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} />

                    <label>Contributed by:</label>
                        <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default NewBeer