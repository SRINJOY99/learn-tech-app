import React from 'react';
import web from '../src/images/pic1.jpg';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const About = () =>{
   return(
       <React.Fragment>
         <Common 
          name="Welcome To About Page Of "
          imgsrc={web}
          visit="/contact"
          btname="Contact Now"
         />
       </React.Fragment>
   );

};

export default About;