import React from 'react'
import { AiOutlineDownCircle } from 'react-icons/ai'

const Jumbotron = () => {
    return (
        <>
            <div className="container montserrat-900">
                <div className="row">
                    <div className="col-12 py-5">
                        <h1 className="display-3 text-center">
                            IIT(BHU)CyberSec
                        </h1>
                        <p className="accent-color text-center display-6">
                            Academic CTF team of IIT(BHU), Varanasi
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5 accent-color">
                        Read out latest blogs
                        <br />
                        <AiOutlineDownCircle size={60} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jumbotron
