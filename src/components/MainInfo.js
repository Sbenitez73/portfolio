import React from 'react';

export const MainInfo = () => {
    return (
        <section id="fh5co-home" data-section="home" data-stellar-background-ratio="0.5">
            <div className="gradient"></div>
                <div className="container">
                    <div className="text-wrap">
                        <div className="text-inner">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <img style={{ left: 'auto', right: 'auto' }}  className='img-logo' src='./static/images/icondev.png' />
                                    <h1 className="to-animate mb-10">Hello Everyone!</h1>
                                    <h1 className="to-animate"> I'm Santiago Benítez</h1> 
                                    <h4 className="to-animate">Full Stack Developer</h4>
                                    <div>
                                        <a className="social-media" href="https://github.com/Sbenitez73"><i className="to-animate fab fa-github social-icons"></i></a>
                                        <a className="social-media" href="https://www.linkedin.com/in/santiago-ben%C3%ADtez-68b402150/"><i className="to-animate fab fa-linkedin-in"></i></a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="slant"></div>
        </section>
    )
}
