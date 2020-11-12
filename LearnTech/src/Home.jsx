import React from 'react';
import web from '../src/images/pic3.jpg';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home = () =>{
   return(
       <React.Fragment>
         <Common 
           name="Grow Your Bussiness With"
           imgsrc={web}
           visit="/service"
           btname="Get Started" 
         />
       </React.Fragment>
   );

};

export default Home;