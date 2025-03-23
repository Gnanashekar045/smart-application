import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="my-nav">
                    <div className="container">
                        <div className="row">
                            <div className="nav-items">
                                <div className="menu-toggle"></div>
                                <div className="logo">
                                    <img className="hide-scrol" alt="" src="assets/images/logo.png" />
                                    <img className="fixed-scrol" alt="" src="assets/images/logo-01.png" />
                                </div>
                                <div className="menu-items">
                                    <div className="menu">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="contact-us.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;