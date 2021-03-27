import React from 'react'

export const Business = () => {
    return (
        <>
            <section id="fh5co-testimonials" data-section="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 section-heading text-center">
                            <h2 className="to-animate">Business</h2>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 subtext to-animate">
                                    <h3>These are some of the companies I have worked with.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box-testimony">
                                <blockquote className="to-animate-2">
                                    <p>&ldquo;Ideas Fractal is a company which makes its niche in the tourism sector, in which it implements flights, hotels, cars, combos, viatics, among other products, in which it provides its services to other companies inside and outside the country.&rdquo;</p>
                                </blockquote>
                                <div className="author to-animate">
                                    <figure><img src="./static/images/ideas.png" alt="ideas"></img></figure>
                                    <p>
                                        Ideas Fractal S.A.S
                                        <span className="subtext">
                                            <a href="http://ideasfractal.com/">
                                                WebSite
                                            </a> 
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="box-testimony">
                                <blockquote className="to-animate-2">
                                    <p>&ldquo;VeriTran is a company whose product is international banking, among other products.&rdquo;</p>
                                </blockquote>
                                <div className="author to-animate">
                                    <figure><img src="./static/images/veritran.png" alt="ideas"></img></figure>
                                    <p>
                                        VeriTran
                                        <span className="subtext">
                                            <a href="https://www.veritran.com/">
                                                WebSite
                                            </a> 
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
	        </section>
        </>
    )
}
