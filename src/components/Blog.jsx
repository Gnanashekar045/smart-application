import React, { Component } from "react";

class Blog extends Component {
    render() {
        return (
            <section className="bg-04">
                <div className="container">
                    <div className="row">
                        <div className="heading">
                            <h2>our news</h2>
                            <span></span>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <article className="blog-sub">
                                <div className="blog-content">
                                    <img src="assets/images/blog/img-02.jpg" alt="" />
                                </div>
                                <div className="blog-content-section">
                                    <div className="blo-content-title">
                                        <h4>The National Minimum Wage Is An Important Part</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut praesentium
                                            facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo fugit
                                            animi assumenda.</p>
                                    </div>
                                    <div className="blog-admin">
                                        <ol>
                                            <li><i className="fal fa-user-tie"></i> By Admin</li>
                                            <li><i className="fal fa-calendar-alt"></i> july 28, 2020</li>
                                        </ol>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <article className="blog-sub">
                                <div className="blog-content">
                                    <img src="assets/images/blog/img-03.jpg" alt="" />
                                </div>
                                <div className="blog-content-section">
                                    <div className="blo-content-title">
                                        <h4>The National Minimum Wage Is An Important Part</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut
                                            praesentium
                                            facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo
                                            fugit
                                            animi assumenda.</p>
                                    </div>
                                    <div className="blog-admin">
                                        <ol>
                                            <li><i className="fal fa-user-tie"></i> By Admin</li>
                                            <li><i className="fal fa-calendar-alt"></i> july 28, 2020</li>
                                        </ol>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <article className="blog-sub">
                                <div className="blog-content">
                                    <img src="assets/images/blog/img-01.jpg" alt="" />
                                </div>
                                <div className="blog-content-section">
                                    <div className="blo-content-title">
                                        <h4>The National Minimum Wage Is An Important Part</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut
                                            praesentium
                                            facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo
                                            fugit
                                            animi assumenda.</p>
                                    </div>
                                    <div className="blog-admin">
                                        <ol>
                                            <li><i className="fal fa-user-tie"></i> By Admin</li>
                                            <li><i className="fal fa-calendar-alt"></i> july 28, 2020</li>
                                        </ol>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}


export default Blog;