import './about.css';
import desk from '../images/workplace.png';
function About(){
    const info=[
        {label:"Education",value:"BSc. Computer Science"},
        {label:"Location", value:"Kenya"},
        {label:"Career Goal",value:" Software Engineer"},
        {label:"Availability", value:"Open to Internship $ Opportunities"},
    ]
    return (
        <div className="about-container">
            <section className="about">
                <div className="about-left">
                    <div>
                        <h1>About Me</h1>
                        <p>
                            Hello!I'm <span>Sharon Njoroge</span> Computer Science student and<br/> 
                            aspiring <span>Software Engineering </span>passionate about building user-<br/>
                            focused web application.I enjoy turning ideas into function and <br/>
                            intuative solutions using existing and emerging technologies.
                        </p>  
                        <p>
                        Through my studies, personal projects, and participation in<br/>
                        technology programs and hackathons, I have developed strong <br/>
                        problem-solving skills and a commitment to continuous learning. <br/>
                        My goal is to create impactful technology that solves real-world <br/>
                        problems and improves people's lives.  
                        </p> 
                    </div>
                    <div className="about-cards">
                        {info.map((item)=> (
                          <div className="about-card" key={item.label} >
                            <h4>{item.label}</h4>
                            <p>{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-right">
                    <img src={desk} alt='workplace'/>
                </div>
            </section>
        </div>
    );
}
export default About; 