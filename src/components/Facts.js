import React from 'react'

export const Facts = () => {
    return (
        <>
            <section id="fh5co-counters" style={{ backgroundImage: `url("images/full_image_1/jpg")` }} data-stellar-background-ratio="0.5">
                <div className="fh5co-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 section-heading text-center to-animate">
                            <h2>Fun Facts</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="fh5co-counter to-animate">
                                <i className="fh5co-counter-icon fas fa-briefcase to-animate-2"></i>
                                <span className="fh5co-counter-number js-counter" data-from="0" data-to="10" data-speed="3000" data-refresh-interval="50">10</span>
                                <span className="fh5co-counter-label">Finished projects</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="fh5co-counter to-animate">
                                <i className="fh5co-counter-icon fas fa-code to-animate-2"></i>
                                <span className="fh5co-counter-number js-counter" data-from="0" data-to="660000" data-speed="3000" data-refresh-interval="50">66000</span>
                                <span className="fh5co-counter-label">Line of codes</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="fh5co-counter to-animate">
                                <i className="fh5co-counter-icon fas fa-mug-hot to-animate-2"></i>
                                <span className="fh5co-counter-number js-counter" data-from="0" data-to="100" data-speed="3000" data-refresh-interval="50">100</span>
                                <span className="fh5co-counter-label">Cup of coffees</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="fh5co-counter to-animate">
                                <i className="fh5co-counter-icon fas fa-user-tie to-animate-2"></i>
                                <span className="fh5co-counter-number js-counter" data-from="0" data-to="5" data-speed="3000" data-refresh-interval="50">5</span>
                                <span className="fh5co-counter-label">Happy clients</span>
                            </div>
                        </div>
                    </div>
                </div>
	        </section>
        </>
    )
}
