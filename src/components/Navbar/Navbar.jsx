import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-nav navbar-dark p-4">

                    <div className="container px-5">

                        <Link className="navbar-brand" to="#">START REACT</Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>

                        </button>


                        <div className="collapse navbar-collapse" id="navbarNav">

                            <ul className="navbar-nav ms-auto">

                                <li className="nav-item">
                                    <Link className="nav-link active pe-4" aria-current="page" to="">START</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active pe-4" aria-current="page" to="portfolio">PORTFOLIO</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link pe-4" to="about">ABOUT</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link pe-4" to="contact">CONTACT</Link>
                                </li>

                            </ul>

                        </div>


                    </div>
                </nav>

            

            </>
        )
    }
}
