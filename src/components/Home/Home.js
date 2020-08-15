import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component{
    render() {
        return (
            <div className="container">

            {/* Link a todas las cervezas */}
                <div className="card">
                    <img className="card-img" src="{}" alt="All Beers" />
                        <div className="card-body">
                            {/* el link */}
                            <Link to='../AllBeers/AllBeers.js'><h4>All Beers</h4></Link>
                            <p>Lorem ipsum dolor, sit amet consectetur</p>
                    </div>
                </div>

            {/* Link a cervezas random */}
                <div className="card">
                    <img className="card-img" src="{}" alt="Random Beers" />
                        <div className="card-body">
                            {/* el link */}
                            <Link to='../RandomBeer/RandomBeer.js'><h4>Ramdom Beer</h4></Link>
                            <p>Lorem ipsum dolor, sit amet consectetur</p>
                    </div>
                </div>    

            {/* Link a cerveza nueva */}
                <div className="card">
                    <img className="card-img" src="{}" alt="New Beer" />
                        <div className="card-body">
                            {/* el link */}
                            <Link to='../RandomBeer/RandomBeer.js'><h4>New Beer</h4></Link>
                            <p>Lorem ipsum dolor, sit amet consectetur</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home