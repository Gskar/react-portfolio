import React from 'react'
import './portfolio.css'
import IMG from '../../assets/thumbsup.webp'


const data = [
  {
    id:1,
    image:IMG,
    title: 'Note Pad',
    description: 'Standard Note Taking App',
    github: 'https://github.com/Gskar/notes',
    demo: 'https://gskar.github.io/notes/'
  },
  {
    id:2,
    image:IMG,
    title: 'Project Title',
    description: 'Standard Note Taking App',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:3,
    image:IMG,
    title: 'Project Title',
    description: 'Standard Note Taking App',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:4,
    image:IMG,
    title: 'Project Title',
    description: 'Standard Note Taking App',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:5,
    image:IMG,
    title: 'Project Title',
    description: 'Standard Note Taking App',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:6,
    image:IMG,
    title: 'Project Title',
    description: 'Standard Note Taking App',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const projects = data.map((project)=>{
  return(
    <article key={project.id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={project.image} alt={project.title} />
          </div>
          <h3>{project.title}</h3>
          <div className='portfolio__item-cta'>
            <a href={project.github} target='_blank' className='btn'>Github</a>
            <a href={project.demo} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
  )
})

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" target='_blank' className='btn'>Github</a>
            <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> */}
        
        {projects}
       
      </div>
    </section>
  )
}

export default Portfolio