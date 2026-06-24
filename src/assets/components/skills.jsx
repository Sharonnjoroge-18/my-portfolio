import { FaReact, FaJsSquare, FaCss3Alt,FaHtml5, FaGitAlt, FaGithub, FaFigma} from "react-icons/fa"
import { DiVisualstudio } from "react-icons/di"; 
import './skills.css'
function Skills(){
    const techSkills=[
        {name:"Frontend",items:[
            {name:"React",icon: <FaReact className="icon react" />},
            { name: "JavaScript", icon: <FaJsSquare className="icon js" /> },
            { name: "HTML5", icon: <FaHtml5 className="icon html" /> },
            { name: "CSS3", icon: <FaCss3Alt className="icon css" /> },
         ] },
         { category: "Tools", items: [
            { name: "Git", icon: <FaGitAlt className="icon git" /> },
            { name: "GitHub", icon: <FaGithub className="icon github" /> },
            { name: "VS Code", icon: <DiVisualstudio className="icon vscode" /> },
            { name: "Figma", icon: <FaFigma className="icon figma" /> },
        ]},
    ];
    const otherSkills = [
     { name: "Problem Solving", percentage: "90%" },
     { name: "UI/UX Design", percentage: "80%" },
     { name: "Responsive Design", percentage: "90%" },
     { name: "Database (MySQL)", percentage: "70%" },
    ];
    return(
       <section className="skills">
            <div className="skills-container">
                <h2 className="skills-title">My Skills</h2>
                
                <div className="skills-content">
                {/* Left Column: Tech Grid */}
                <div className="skills-left">
                    {techSkills.map((group, index) => (
                    <div key={index} className="skill-group">
                        <h3>{group.category}</h3>
                        <div className="apps-grid">
                        {group.items.map((item, i) => (
                            <div key={i} className="app-card">
                            {item.icon}
                            <span>{item.name}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>

                {/* Vertical Divider (Hidden on mobile) */}
                <div className="skills-divider"></div>

                {/* Right Column: Progress Bars */}
                <div className="skills-right">
                    <h3>Other Skills</h3>
                    <div className="progress-list">
                    {otherSkills.map((skill, index) => (
                        <div key={index} className="progress-item">
                        <div className="progress-info">
                            <span>{skill.name}</span>
                            <span>{skill.percentage}</span>
                        </div>
                        <div className="progress-bar-bg">
                            {/* Inline style dynamically sets the width */}
                            <div className="progress-bar-fill" style={{ width: skill.percentage }}></div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}
export default Skills;