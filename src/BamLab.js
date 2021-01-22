import React , { useState }  from 'react'
import Pic from './profilePic.jpg';
import { Fade } from 'react-reveal';
import { render } from '@testing-library/react';




function BamLab(props){
        function animateOut(page){
            document.getElementById("bamPage").classList.toggle("reveal");
        
            setTimeout(function() {
                props.setActive(page)
            },650)
        }
        return(
            <div id = "bamPage" className={props.active == 'bamlab' ? "reveal" : "" }>
               
                <Fade top cascade>
                   {props.active == 'bamlab' && <ul className= "NavMenu">
                        <li onClick={() => animateOut('')}>
                            Home
                        </li>
                        <li onClick={() => animateOut('researchGoals')}>
                            Research Goals
                        </li>
                        <li onClick={() => animateOut('profile')}>
                            Farhana Zulkernine
                        </li>
                        <li>
                            School of Computing
                            </li>

                    </ul> }
                </Fade>

                <Fade top cascade>
                   {props.active == 'bamlab' && <ul className= "BamMenu">
                        <li style = {{color:'black', fontSize: 22 + 'px', pointerEvents: 'none'}}>
                            BamLab
                        </li>
                        <li onClick={() => animateOut('researchGoals')}>
                            Projects
                        </li>
                        <li onClick={() => animateOut('profile')}>
                            People
                        </li>
                        <li>
                            Publications
                            </li>

                    </ul> }
                </Fade>               
                <div className = 'Page'>
                    <div className='profileSection'>
                        
                        <div className = "menuList" style = {{textAlign: 'left'}}> 
                            <p className='subtitle' style = {{textAlign: 'left'}}>
                                BamLab
                            </p>
                            <p className='jobtitle' style = {{textAlign: 'center'}}>
                                Big-Data Analytics and Management Laboratory
                            </p>
                            <p className='subsubtitle'>
                                 633 Goodwin Hall
                            </p>
                            <br/>
                            <p className='subsubtitle'>
                               <span style = {{fontWeight: 'bold'}}> Open Positions: </span>
                                <li> PhD position in large graph data management and analytics</li>
                                <li> MSc in autonomous vehicular data analytics </li>
                                <br/>
                                What we're looking for!
                                <li>Motivated</li>
                                <li>Goal oriented</li>
                                <li>Excellent communication and technical writing skills</li>
                                <li>Good organizational and leadership capabilities</li>
                                <br/>
                                To apply for an open position:
                                <li>A cover letter stating the position in which you are interested</li>
                                <li>Your competitive qualifications and eligibility to join the group</li>
                                <li>A resume and sample of your best written work!</li>
                            </p>
                        </div>
                    </div>            
                </div>
            </div>
        );
    }

export default BamLab;