import React from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="row bg-accent-color">
            <nav className="align-items-start col navbar navbar-expand-lg bg-transparent montserrat-800">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <BiMenuAltLeft size={40} className="light-color" />
                    </span>
                </button>
                <div
                    className="align-items-start collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav mx-auto">
                        <Link href="/">
                            <a
                                className="nav-link active light-color-links mx-2"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a>
                        </Link>
                        <Link href="/about">
                            <a
                                className="nav-link light-color-links mx-2"
                                href="#"
                            >
                                About Us
                            </a>
                        </Link>
                        <Link href="/blogs">
                            <a
                                className="nav-link light-color-links mx-2"
                                href="#"
                            >
                                Blogs
                            </a>
                        </Link>
                        <Link href="/ctf">
                            <a
                                className="nav-link light-color-links mx-2"
                                href="#"
                            >
                                CTFs
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
            <style>
                {`
                .nav-link {
                    font-size: 1.5em
                }
                `}
            </style>
        </div>
    )
}

export default Navbar
