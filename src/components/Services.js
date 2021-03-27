import React from 'react'

export const Services = () => {
    return (
        <>
            <section id="fh5co-services" data-section="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 section-heading text-left">
                            <h2 className=" left-border to-animate">Services</h2>
                            <div className="row">
                                <div className="col-md-8 subtext to-animate">
                                    <h3>These are some of the services that you can contract with me.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i className="icon to-animate-2 fas fa-laptop"></i>
                            <h3>Web Development</h3>
                            <p>Development of web platforms / applications, from a simple crud to complex systems, in the technologies of: Python-Django, React, Angular, .NET CORE, Nodejs-Express.</p>
                        </div>
                        <div className="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i className="icon to-animate-2 fas fa-mobile"></i>
                            <h3>Mobile Development</h3>
                            <p>Mobile application development with react native vs nativescript, connection to device hardware, from simple applications to highly complex applications.</p>
                        </div>

                        <div className="clearfix visible-sm-block"></div>

                        <div className="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i className="icon to-animate-2 fas fa-desktop"></i>
                            <h3>Desktop Applications</h3>
                            <p>Desktop applications with TKinter, WxPython and ElectronJS technologies.</p>
                        </div>
                        <div className="col-md-6 col-sm-6 fh5co-service to-animate">
                            <i className="icon to-animate-2 devicon-linux-plain"></i>
                            <h3>Linux Audit</h3>
                            <p>Audit of linux servers based on centOs, redHat and Arch linux, FTP configuration, Samba, and file management.</p>
                        </div>
                        
                    </div>
                </div>
	        </section>
        </>
    )
}
