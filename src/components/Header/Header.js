import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div className="container">
                {/* el link que nos llevara al homepage */}
                <header>
                    <Link to="/"> <img className="header-img" src="{}" alt="Header"/> </Link>
                </header>
            </div>
        )
    }
}

export default Header