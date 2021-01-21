import './App.css';
import React, { useState } from 'react';
import { Fade, Reveal } from 'react-reveal';
import TransitionPage from "./transitionPage.js";
import Profile from "./Profile.js";

function App() {

    const [Active, setActive] = useState('')

    return (
        <div className="App">

            <div className="Page" id="landing">
                <Fade top cascade>
                    <ul className="homeinfo">
                        <li>
                            Dr. Farhana Zulkernine
                            </li>
                        <li>
                            633 Goodwin Hall
                            </li>
                        <li>
                            farhana@cs.queensu.ca
                            </li>
                        <li>
                            Queens University
                            </li>
                        <li>
                            School of Computing
                            </li>

                    </ul>

                </Fade>
                <div className="home">


                    <div className='circleoutline'>
                        <Fade> <div className="pageTitle">BamLab</div></Fade>
                        <Fade up delay={250}>
                            <div className="underline"></div>

                        </Fade>
                    </div>
        
                        <button className="entryButton" onClick={() => setActive('researchGoals')} > ENTER > </button>
    
                    
                </div>
                <div className={Active == 'researchGoals' ? 'researchGoalsContainer show' : 'researchGoalsContainer'}>
                    {Active == 'researchGoals' && <TransitionPage setActive = {setActive}/>}
               </div>
               <div className={Active == 'profile' ? 'profileLargeContainer show-top' : 'profileLargeContainer'}>
                    {Active == 'profile' && <Profile setActive = {setActive}/> }
               </div>
               {/*<div className={Active == 'bamlab' ? 'profileLargeContainer show-top' : 'profileLargeContainer'}>
                    {Active == 'bamlab' && <Profile setActive = {setActive}/>}
                </div>*/}


            </div>

            <Fade left> <div className="sectionTitle">01. Work Experience</div> </Fade>
            <div className="Page" id="workExp">
                <Fade up delay={500}>
                    <div className="underline"></div>
                    <div className='section'>
                        <p className='subtitle'>
                            RBC Analytics and Innovation
                      </p>
                        <p className='jobtitle'>
                            software engineer
                      </p>
                        <p className='subsubtitle'>
                            summer '20
                      </p>

                        <p className='info'>

                            <li>Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.</li>
                            <li>Configured Master Jenkins to control Jenkins Agents on different operating systems.  </li>
                            <li>Containerized Portfolio Insights application on Docker and deployed on Openshift. </li>
                            <li>Trained in both AWS and Kubernetes while documenting for team use on Confluence. </li>
                            <li>Presented secret management strategy to senior management and documented Vault tutorial for team use.</li>

                        </p>



                    </div>

                    <div className='section'>
                        <p className='subtitle'>
                            RBC Analytics and Innovation
                      </p>
                        <p className='jobtitle'>
                            software engineer
                      </p>
                        <p className='subsubtitle'>
                            summer '20
                      </p>

                        <p className='info'>
                            <li>Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.</li>
                            <li>Configured Master Jenkins to control Jenkins Agents on different operating systems.  </li>
                            <li>Containerized Portfolio Insights application on Docker and deployed on Openshift. </li>
                            <li>Trained in both AWS and Kubernetes while documenting for team use on Confluence. </li>
                            <li>Presented secret management strategy to senior management and documented Vault tutorial for team use.</li>
                        </p>



                    </div>

                    <div className='section'>
                        <p className='subtitle'>
                            RBC Analytics and Innovation
                      </p>
                        <p className='jobtitle'>
                            software engineer
                      </p>
                        <p className='subsubtitle'>
                            summer '20
                      </p>

                        <p className='info'>
                            <li>Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.</li>
                            <li>Configured Master Jenkins to control Jenkins Agents on different operating systems.  </li>
                            <li>Containerized Portfolio Insights application on Docker and deployed on Openshift. </li>
                            <li>Trained in both AWS and Kubernetes while documenting for team use on Confluence. </li>
                            <li>Presented secret management strategy to senior management and documented Vault tutorial for team use.</li>
                        </p>



                    </div>
                </Fade>
            </div>
            <Fade right> <div className="sectionTitle" id="right-align">02. Extra-Curriculars</div> </Fade>
            <div className="Page" id="extraCurr">
                <Fade up delay={500}> <div className="underline"></div></Fade>
                <Fade left delay={500}>
                    <div className='extrasection'>
                        <p className='subtitle'>
                            Food Drive
                      </p>
                        <p className='jobtitle'>
                            marketing lead
                      </p>
                        <p className='subsubtitle'>
                            fall '20
                      </p>
                        <br />
                        <p className='info'>
                            Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.
                            Configured Master Jenkins to control Jenkins Agents on different operating systems.
                      </p>


                    </div>
                    <div className='extrasection'>
                        <p className='subtitle'>
                            Spero
                      </p>
                        <p className='jobtitle'>
                            finance lead
                      </p>
                        <p className='subsubtitle'>
                            fall '20
                      </p>
                        <br />
                        <p className='info'>
                            Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.
                            Configured Master Jenkins to control Jenkins Agents on different operating systems.
                      </p>
                    </div>
                </Fade>
                <Fade right delay={500}>
                    <div className='extrasection'>
                        <p className='subtitle'>
                            Food Drive
                      </p>
                        <p className='jobtitle'>
                            marketing lead
                      </p>
                        <p className='subsubtitle'>
                            fall '20
                      </p>
                        <br />
                        <p className='info'>
                            Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.
                            Configured Master Jenkins to control Jenkins Agents on different operating systems.
                      </p>


                    </div>
                    <div className='extrasection'>
                        <p className='subtitle'>
                            Spero
                      </p>
                        <p className='jobtitle'>
                            finance lead
                      </p>
                        <p className='subsubtitle'>
                            fall '20
                      </p>
                        <br />
                        <p className='info'>
                            Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.
                            Configured Master Jenkins to control Jenkins Agents on different operating systems.
                      </p>
                    </div>
                </Fade>
            </div>

            <Fade up delay={500}>

                <div className="sectionTitle">03. Education</div>
                <div id="education">
                    <Fade up delay={500}> <div className="underline"></div></Fade>
                    <div className='section' style={{ width: '90%', padding: 20 + 'px', margin: 30 + 'px' }}>
                        <p className='subtitle'>
                            University of Toronto
                        </p>
                        <p className='jobtitle'>
                            BASc: Computer Engineering
                        </p>
                        <p className='subsubtitle'>
                            Sept 2017 - Current
                        </p>
                    </div>
                </div>
            </Fade>

        </div>
    );

}

export default App;
