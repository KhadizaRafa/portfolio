import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile-img.jpg'
const About = () => {
    return (
        <div className="container mt-5">
            <h1>About Me</h1>
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={profile} className='w-50 '></img>
                </div>
                <div className="col-md-6 pt-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At a vitae iste soluta, nobis quaerat officiis suscipit doloribus veritatis! Animi consequuntur provident enim deleniti qui autem quis soluta vel culpa eius fugiat molestias quod perferendis, ex laudantium, eveniet eum itaque ad eaque. </p>

                    <Link to="/contact"><button type="button" class="btn btn-light">Send Message</button></Link>
                    <Link to="../../images/Syeda Khadiza Akhter.pdf" target="_blank" download>
                    <button type="button" class="btn btn-light">Download Resume</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default About;