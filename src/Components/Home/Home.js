import React from 'react';
import About from '../About/About';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import MyEducation from '../MyEducation/MyEducation';
import ContactMe from '../ContactMe/ContactMe';
import AllProjects from '../Projects/AllProjects';

const Home = (props) => {
    return (
        <div>
          <Navigation />
          <AllProjects />
           <div>
               <h1>Md Minhajul Islam</h1>
               <p>Junior Web developer</p>
           </div>
           <div>
           <About />
           </div>
           <div>
           <Projects />
           </div>
           <div>
           <MyEducation />
           </div>
           <div>
           <ContactMe />
           </div>
        </div>
    );
};

export default Home;