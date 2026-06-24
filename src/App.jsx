import Hero from './assets/components/Hero';
import Navbar from './assets/components/navbar';
import About from './assets/components/about.jsx';
import Skills from './assets/components/skills.jsx';
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
    </>
  );
}
export default App;