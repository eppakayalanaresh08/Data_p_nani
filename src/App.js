import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About';
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
 import Certifications from './components/Certifications'

import './App.css';

const App=()=>(
    <div className="App">
      <NavBar/> 
       <Home/>
       <About/>
       <Certifications/>

        <Portfolio/>
           <Experience/>
         <Contact/>
      <SocialLinks/>     
    </div>
)


export default App;
