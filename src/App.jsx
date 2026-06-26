import Hero from './assets/components/hero';
import Navbar from './assets/components/navbar';
import About from './assets/components/about.jsx';
import Skills from './assets/components/skills.jsx';
import Project from './assets/components/project.jsx';
import Experience from './assets/components/experience.jsx';
import Contact from './assets/components/contact.jsx';
import Footer from './assets/components/footer.jsx';
 function App() {
  return (
    <>
       <Navbar/>
        <section id="home">
          <Hero/>
        </section>
        
        <section id="about">
          <About/>
        </section>

        <section id="skills">
          <Skills/>
        </section>

        <section id="projects">
          <Project/>
        </section>

        <section id="experience">
          <Experience/>
        </section>

        <section id="contact">
          <Contact/>
        </section>
        <Footer/>

    </>
  );
}
export default App;