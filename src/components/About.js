import React from 'react'

export const About = () => {
    return (
        <>
            <section id="fh5co-about" data-section="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 section-heading text-center">
                            <h2 className="to-animate">About</h2>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 subtext to-animate">
                                    <h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="fh5co-person text-center to-animate">
                                <h3>Interests</h3>
                                <p>I want to tell you a little about myself, about my experience and what I like to do.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="fh5co-person text-center to-animate">
                                <figure><img src="./static/images/about-photo.jpg" alt=""></img></figure>
                                <h3>Santiago Benítez Arenas</h3>
                                <span className="fh5co-position">Developer</span>
                                <p>I am passionate about technology and programming in general, I always try to improve day by day my quality of code and my quality as a programmer, I have more than two years of experience as a professional developer, and more than 4 years programming. I have worked as a freelancer, and I have worked remotely for more than one year, always friendly and trying to find the best way to program.</p>
                                <ul className="social social-circle">
                                    <li><a href="https://web.facebook.com/david.benitez.3511041/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/Sbenitez73"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://github.com/Sbenitez73"><i className="fab fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="fh5co-person text-center to-animate">
                                <h3>Hobbies</h3>
                                <p>I really like playing video games, food and anime, when I am not doing any of these things I am sleeping or programming :D.</p>
                            </div>
                        </div>
                    </div>
                </div>
	        </section>
        </>
    )
}
