import React, { Component } from "react";

class Calculation extends Component {
    render() {
        return (
            <section className="bg-02">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="cal-box">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Distinctio obcaecati modi itaque? Molestiae veniam iste
                                    totam eaque reprehenderit. Animi ametquos commodi nostrum
                                    ad corporis earum architecto omnis aspernatur ipsum!</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Distinctio obcaecati modi itaque? Molestiae veniam iste
                                    totam eaque reprehenderit. Animi ametquos commodi nostrum
                                    ad corporis earum architecto omnis aspernatur ipsum!</p>

                                <ol>
                                    <li>
                                        <div className="_lk_bg_cd">
                                            <div className="counting" data-count="100">100</div>
                                            <h5>Active Cources</h5>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="_lk_bg_cd">
                                            <div className="counting" data-count="130">130</div>
                                            <h5>Student Learning</h5>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="_lk_bg_cd">
                                            <div className="counting" data-count="20">20</div>
                                            <h5>Free Cources</h5>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="cal-box">
                                <img src="assets/images/slider/2.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Calculation;