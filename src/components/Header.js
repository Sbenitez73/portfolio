import React, {useState} from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

export const Header = ({ theme, switchTheme }) => {


    const [isDarkMode, setIsDarkMode] = useState( theme === 'dark' ? true : false );

    return (
        <>
            <header role="banner" id="fh5co-header">
			    <div className="container">
                    <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <a href="/#" className="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                        <a className="navbar-brand" href="index.html">SBenítezDev</a> 
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="/#" data-nav-section="home"><span>Home</span></a></li>
                        <li><a href="/#" data-nav-section="work"><span>Work</span></a></li>
                        <li><a href="/#" data-nav-section="testimonials"><span>Bussiness</span></a></li>
                        <li><a href="/#" data-nav-section="services"><span>Services</span></a></li>
                        <li><a href="/#" data-nav-section="about"><span>About</span></a></li>
                        <li><a href="/#" data-nav-section="contact"><span>Contact</span></a></li>
                        <li>
                            <DarkModeToggle
                                className='switch'
                                onChange={ () => {
                                    switchTheme( !isDarkMode );
                                    setIsDarkMode( !isDarkMode );    
                                }}
                                checked={isDarkMode}
                                size={60}
                            />
                        </li>
                    </ul>
                    </div>
                    </nav>
		        </div>
	        </header>
        </>
    )
}
