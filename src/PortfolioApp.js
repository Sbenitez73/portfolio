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

export const PortfolioApp = () => {
    return (
        <div>
            <Header />
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
