import './App.css';
//import {Route} from 'react-router-dom';
import Header from './components/header';
import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Skills from './components/skills';
import Resume from './components/resume';


const App = () => {
  return(
    <div>
      <Header></Header>
      
          {/* <Route exact path="/"><Home/></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/education"><Education/></Route>
          <Route exact path="/experience"><Experience/></Route>
          <Route exact path="/projects"><Projects/></Route>
          <Route exact path="/contact"><Contact/></Route> */}

      {/* <About /> */}
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
      <Contact />        

    </div>
    

  );
};

export default App;