import React from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {

    function sendEmail ( e ) {
        e.preventDefault();
        emailjs.sendForm( 'gmail', 'template_xfj588w', e.target, 'user_eM2APZOJW7tBh8tF0JvYZ' )
            .then(( result ) => {
                console.log(result.text);
            }, ( error ) => {
                console.log(error.text);
            });
            e.target.reset();

    }

    return (
        <>
            <section id="fh5co-contact" data-section="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 section-heading text-center">
                            <h2 className="to-animate">Get In Touch</h2>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 subtext to-animate">
                                    <h3>Contact me if you want to hire any of my services.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-bottom-padded-md">
                        <div className="col-md-6 to-animate">
                            <h3>Contact Info</h3>
                            <ul className="fh5co-contact-info">
                                <li className="fh5co-contact-address">
                                    <i className="fas fa-map-pin"></i>
                                    Dosquebradas Risaralda, Colombia
                                    <embed className="flag" src="./static/svg/colombia.svg" />
                                </li>
                                <li><i className="fas fa-phone-alt"></i> +57 (313) 386-9820</li>
                                <li><i className="far fa-envelope"></i>santibenitez2373@gmail.com</li>
                            </ul>
                        </div>

                        <form className="col-md-6 to-animate" onSubmit={ sendEmail }>
                            <h3>Contact Form</h3>
                            <div className="form-group ">
                                <label className="sr-only">Name</label>
                                <input name="name" id="name" className="form-control" placeholder="Name" type="text" />
                            </div>
                            <div className="form-group ">
                                <label className="sr-only">Email</label>
                                <input name="email" id="email" className="form-control" placeholder="Email" type="email" />
                            </div>
                            <div className="form-group ">
                                <label className="sr-only">Phone</label>
                                <input name="phone" id="phone" className="form-control" placeholder="Phone" type="text" />
                            </div>
                            <div className="form-group ">
                                <label className="sr-only">Message</label>
                                <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary btn-lg" value="Send Message" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
                <div id="map" className="to-animate"></div>
            </section>
        </>
    )
}
