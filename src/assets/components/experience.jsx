import { FaCode, FaTrophy} from "react-icons/fa";
import './experience.css';
import trophy from "../images/trophy.png";

function Experience(){
    const experiences=[
        {
            icon:<FaCode/>,
            title: "African Agility Program",
            year: "2026",
            role: "Frontend Development Participant",
            description:
                "Gained practical skills in frontend development, teamwork, agile methodologies, and real-world project collaboration.",
        },
        {
            icon: <FaTrophy />,
            title: "Hackathon Participant",
            year: "2026",
            role: "Semi-finalist",
            description:
                "Participated in building innovative solutions, collaborating with a team and reaching the semi-finals stage.",
        },
    ];
    return(
        <section className="experience">
            <div className="experience-left">
                <h2>Experience & Achievements</h2>
                <div className="experience-line"></div>
                <div className="timeline">
                    {experiences.map((item, index)=>(
                        <div className="timeline-item" key={index}>
                            <div className="timeline-icons">
                                {item.icon}
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{item.tiitle}</h3>
                                    <span>{item.year}</span>
                                </div>
                                <h4>{item.role}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="experience-right">
                <img src={trophy} alt="Achievement Trophy" />
            </div>
        </section>
    );
}
export default Experience;