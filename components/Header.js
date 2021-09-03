import React from 'react'

const Navbar = () => {
    return (
        <div className="row">
            <nav className="col navbar navbar-expand-lg navbar-light bg-transparent montserrat-800">
                <a className="navbar-brand" href="#">IIT(BHU)CyberSec</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About Us</a>
                        <a className="nav-link" href="#">Blogs</a>
                        <a className="nav-link" href="#">CTFs</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
