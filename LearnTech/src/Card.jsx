import React from 'react';
import web from '../src/images/pic3.jpg';
import {NavLink} from 'react-router-dom';
import Sdata from './Sdata';


const Card = (props) =>{
   return(
       <React.Fragment>
      
                          <div className="col-md-4 col-10 mx-auto">
                          <div class="card" >
                            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">{props.title}</h5>
                                 <p className="card-text">Here You Will Learn {props.title}</p>
                                <NavLink to="" className="btn btn-primary">Go To Home</NavLink>
                            </div>
                            </div>

                          </div>
                         

                       
              
          
       </React.Fragment>
   );

};

export default Card;