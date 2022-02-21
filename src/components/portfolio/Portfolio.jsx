import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// USE OBJECT TO DISPLAY CARD 
const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Card Profile About You',
        github: 'https://github.com/orandorisk/card.github.io',
        demo: 'https://card-github-io.vercel.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Fylo Data About Something',
        github: 'https://github.com/orandorisk/fylo-data',
        demo: 'https://fylo-data-orandorisk.vercel.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Fylo Landing Page Website',
        github: 'https://github.com/orandorisk/fylo-landing-orlando',
        demo: 'https://fylo-landing-orlando-git-main-orandorisk.vercel.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Fylo Landing Page Website 2',
        github: 'https://github.com/orandorisk/heybrol',
        demo: 'https://heybrol.vercel.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Testimonial Page Someone',
        github: 'https://github.com/orandorisk/testimonialorlando.github.io',
        demo: 'https://card-github-io.vercel.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Landing Page Huddle',
        github: 'https://github.com/orandorisk/landingpage-orlando',
        demo: 'https://landingpage-orlando.vercel.app/'
    }
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target="_blank" rel='noreferrer'>Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank" rel='noreferrer'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio