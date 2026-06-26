import './project.css';
import solhydraImg from '../images/solhydrapage.png';
import sheworksImg from '../images/sheworksAI.png';
function Project(){
    const projects=[
        {
            id:1, title:"SolHydra Platform",
            description:
                "A full-stack web application featuring a product website, user authentication, CTA workflows, and an admin dashboard for managing products and shop content.",
            image: solhydraImg,
            tech: "React • JavaScript • MySQL",
            status: "Live",
            github: "https://github.com/Sharonnjoroge-18",
            demo: "https://solhydra.vercel.app"
        },
        {
            id: 2,
                title: "SheWorks AI",
                description:
                    "A purpose-driven job search platform that helps women discover casual, part-time, full-time, remote, and flexible employment opportunities through a single accessible platform.",
                image: sheworksImg,
                    tech: "React • JavaScript • CSS",
                status: "In Progress",
                github: "https://github.com/Sharonnjoroge-18",
                demo: "#"
        }
    ]

    return(
        <section className="projects" >
            <div className="projects-header">
                <div>  
                 <h2>My Projects</h2>
                 <div className="underline"></div>
                </div>
                <button className="view-btn">View All Projects</button>
            </div>
            <div className="projects-grid">
                {projects.map((project)=>
                 <div className="project-card" key={project.id}>
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                    />
                    <div className="project-content">
                        <div className='project-info'>
                            <span
                                className={`status ${
                                project.status === "Live"
                                    ? "live"
                                    : "progress"
                                }`}
                            >
                                {project.status}
                            </span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <small>{project.tech}</small>
                        </div>
                        <div className="project-links">
                            {project.status === "Live" ? (
                                <a
                                href={project.demo}
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                                    Live Demo
                                </a>
                            ) : (
                                <span className="coming-soon">Coming Soon</span>
                            )}

                            <a href={project.github}
                               href={project.github}
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                 </div>
                )}

            </div>
        </section>
    )
}
export default Project;