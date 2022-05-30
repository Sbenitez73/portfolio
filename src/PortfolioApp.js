import React from 'react'
import { About } from './components/About';
import { Business } from './components/Business';
import { Contact } from './components/Contact';
import { Facts } from './components/Facts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Knowledge } from './components/Knowledge';
import { MainInfo } from './components/MainInfo';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import useLocalStorage from 'use-local-storage';



export const PortfolioApp = () => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = ( isDark ) => {
        const newTheme = ( isDark ) ? 'dark' : 'light';
        setTheme( newTheme );
    }

    return (
        <div className='app' data-theme={ theme }>
            <Header theme={ theme } switchTheme={ switchTheme }  />
            <MainInfo />
            <Knowledge />
            <Projects />
            <Business />
            <Services />
            <About />
            <Facts />
            <Contact />
            <Footer />
        </div>
    )
}
