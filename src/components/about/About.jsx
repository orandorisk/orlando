import React from 'react'
import './about.css'
import ME from '../../assets/about_me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="gambar" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <artice className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Experience</small>
                        </artice>

                        <artice className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </artice>

                        <artice className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </artice>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eius fugiat quos odit ipsum debitis velit obcaecati quasi unde blanditiis tenetur, rem tempore facere aliquam.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About