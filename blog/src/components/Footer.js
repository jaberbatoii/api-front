import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <section className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Info</h6>
                        <hr/>
                        <p>
                        It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Link</h6>
                       <hr/>
                       <div><Link to="/" className="text-decoration-none">Home</Link></div>
                       <div><Link to="/Cantact" className="text-decoration-none ">Cantact</Link></div>
                       <div><Link to="/Aboute" className="text-decoration-none ">Aboute</Link></div>
                       <div><Link to="/" className="text-decoration-none ">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Cantact Information</h6>
                          <hr/>
                            <div><p>محصولی خود ساخته برای نمونه کاری</p></div>
                            <div><p>09057050364</p></div>
                            <div><p>05142658989</p></div>
                            <div><p>فکس : 4025895</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
