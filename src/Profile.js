import React , { useState }  from 'react'
import Pic from './profilePic.jpg';
import { Fade } from 'react-reveal';
function Profile(props) {
    const [moreInfo, showMoreInfo] = useState(false);
    
    
        return (
            <div className = { props.active == 'profile' ? "innerProfContainer reveal" : "innerProfContainer"}> 
                    <Fade top cascade>
                    <ul className="NavMenu">
                        <li onClick={() => props.setActive('')}>
                            Home
                        </li>
                        <li onClick={() => props.setActive('researchGoals')}>
                            Research Goals
                        </li>
                        <li>
                            BamLab
                            </li>
                        <li>
                            School of Computing
                            </li>

                    </ul>
                </Fade>
                <div className = 'Page'>
                <div className='profileSection'>
                    <div className = "menuList" style = {{marginRight: 20 + 'px'}} >
                        <img id = "profilePic" src = {Pic}/> 
                
        
                            <ul className="homeNav">
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

                            </ul>

                     
                    </div>
                    
                    <div className = "menuList" style = {{textAlign: 'left'}}> 
                        <p className='subtitle' style = {{textAlign: 'left'}}>
                            Director of BamLab 
                        </p>
                        <p className='jobtitle'>
                            Associate Professor
                        </p>
                        <p className='subsubtitle'>
                            Coordinator and Advisor, Cognitive Science Program
                        </p>
                        <br/>
                        <p className='info'>

                        Farhana Zulkernine is an Associate Professor and the Coordinator of the Cognitive Science program at the School of Computing at Queen's University. She holds a Ph.D. degree from the School of Computing at Queen's University and is a member of Professional Engineers of Ontario. She has more than 15 years of international work experience in three continents in software design, analysis and research. As a researcher she has worked with CA Technologies, IBM Canada, SAP Germany and Fondazione Bruno Kessler in Italy. Her research interests include service and cloud computing, big data analytics and management, and cognitive computing. She has ongoing research collaborations with IBM Canada, Gnowit, Calian, Kings Distributed Systems, the Centre for Advanced Computing (CAC), Compute Canada, Canadian Primary Care Sentinel Services Network (CPCSSN), and Queen's School of Medicine, Law, and Business. She has taught a wide number of courses in database management systems, cognitive science and machine learning. Her research has been funded by IBM, CFI, MITACS, NSERC CRD, Discovery and CREATE, OCE VIP, CUTRIC, CIMVHR, SOSCIP and Queen's. She has published in many reputed journals and international conferences and served on a variety of conference program and grant committees as an expert in big data and machine learning.

                        </p>
                    </div>
                </div>            
                </div>


        
                <div className="Page" id="workExp">
                <div className="sectionTitle">01. Courses</div> 
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
                
                </div>
                <div className="sectionTitle" id="right-align">02. Extra-Curriculars</div> 
                <div className="Page" id="extraCurr">
                    <div className="underline"></div>
                    
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
                
                </div>
                
            


            </div> 

        );
   

}

export default Profile;