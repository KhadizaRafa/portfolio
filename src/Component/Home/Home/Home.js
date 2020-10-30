import React from 'react';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div style={{ backgroundColor: 'black' }} className='pb-5' >
            <div className="mx-auto pt-5">
                <h1 className="text-white pt-5 p-5 name">Hello! I'm <span className="bold">Khadiza Rafa</span></h1>
                <Link to="../../images/Syeda Khadiza Akhter.pdf" target="_blank" download>
                    <button type="button" class="btn btn-light">Download Resume</button></Link>
                <Link to="/contact">
                    <button type="button" class="btn btn-light">Get In Touch</button></Link>

                <div>
                    <span className='p-2'><a href='https://github.com/KhadizaRafa/' target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a></span>
                    <span className='p-2'><a href='https://www.linkedin.com/in/khadiza-rafa/' target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></span>
                </div>
            </div>
            <Particles />
        </div>
    );
};

export default Home;