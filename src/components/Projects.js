import React from 'react';

export const Projects = () => {
    return (
        <>
            <section id="fh5co-work" data-section="work">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-12 section-heading text-center">
                            <h2 className="to-animate">Projects</h2>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 subtext to-animate">
                                    <h3>I carried out these projects mostly with companies, however some projects carried out are for practice or simply personal.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row row-bottom-padded-sm">
                        <div className="col-md-4 col-sm-6 col-xxs-12">
                            <div className="fh5co-project-item to-animate">
                                <img src="./static/images/covid.png" alt="covid" className="img-responsive"></img>
                                <div className="fh5co-text">
                                    <h2>COVID</h2>
                                    <span>Web | Angular ServiceStack(.NET)</span>
                                    <br />
                                    <span>This web application shows information in real time of confirmed cases, number of deaths and air restrictions by country, in addition to that, it shows a graph to better illustrate the data.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xxs-12">
                            <div className="fh5co-project-item to-animate">
                                <img src="./static/images/overhub.png" alt="overhub" className="img-responsive"></img>
                                <div className="fh5co-text">
                                <h2>Overhub</h2>
                                <span>Web | Django</span>
                                <br />
                                <span>This application connects its users, in order to ask questions and answers about hardware, software and programming through its forum, it has an administrator, and a news section.</span>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix visible-sm-block"></div>

                        <div className="col-md-4 col-sm-6 col-xxs-12">
                            <div className="fh5co-project-item to-animate">
                                <img src="./static/images/workshop.png" alt="workshop" className="img-responsive"></img>
                                <div className="fh5co-text">
                                <h2>UnitedWorkShop</h2>
                                <span>Web | React .NET 5</span>
                                <br />
                                <span>web application intended for workshops where an administrator user can add products, see vehicle maintenance tickets, see what their employees are doing in real time, additionally they can see how the economy of their company is, such as investment, profit and average, etc.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xxs-12">
                            <div className="fh5co-project-item to-animate">
                                <img src="./static/images/aguas.png" alt="workshop" className="img-responsive"></img>
                                <div className="fh5co-text">
                                <h2>Aguas más cerca</h2>
                                <span>Mobile | React Native</span>
                                <br />
                                <span>Mobile application where you can see the license plates of a property in relation to its sewage service, listing and internal management of a license plate.</span>
                                </div>
                            </div>
                        </div> 

                        <div className="col-md-4 col-sm-6 col-xxs-12">
                            <div className="fh5co-project-item to-animate">
                                <img src="./static/images/exito.png" alt="workshop" className="img-responsive"></img>
                                <div className="fh5co-text">
                                <h2>Éxito Business Trip</h2>
                                <span>Mobile | React Native</span>
                                <br />
                                <span>Mobile application where you can make reservations for flights, hotels, advances, cars and insurance, it has an internal approval flow, it shows configurable news. Contains dark theme. Deployed for Android and iOS.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xxs-12">
                            <div className="fh5co-project-item to-animate">
                                <img src="./static/images/siot.png" alt="workshop" className="img-responsive"></img>
                                <div className="fh5co-text">
                                <h2>Comsiot</h2>
                                <span>Mobile | Ionic</span>
                                <br />
                                <span>Mobile application that is used for management at the company level within the management of sewerage meters in the field. With local save and dynamic form filling flow, officer location services.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xxs-12">
                            <div className="fh5co-project-item to-animate">
                                <img src="./static/images/npm.png" alt="workshop" className="img-responsive"></img>
                                <div className="fh5co-text">
                                <h2>Thermal Printer Package</h2>
                                <span>NPM | Typescript and Java with Android</span>
                                <br />
                                <span>This package works for the connection from bluetooth and mac addresses, it allows the connection and printing of information with language, it also allows printing of images and manual control of connected printers, see more in: <a href='https://www.npmjs.com/package/@sbenitez73/cordova-ble-zbtprinter'>@sbenitez-package</a></span>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center to-animate">
                            <p>* I worked on more projects but I do not mention them due to privacy policies.</p>
                        </div>
                    </div>
                </div>
	        </section>
        </>
    )
}
