import React , { useState, useEffect, useLayoutEffect}  from 'react'
import Pic from './profilePic.jpg';
import { Fade } from 'react-reveal';
function Profile(props) {
    const [moreInfo, showMoreInfo] = useState(false);
    function animateOut(page){
        document.getElementById("innerProfContainer").classList.toggle("reveal");
       
        setTimeout(function() {
            props.setActive(page)
        },650)
    }

    useEffect(() => {
        window.scrollTo(document.getElementById("startPoint1").scrollHeight, 0);
    }); 
        
        return (
            <div id = "innerProfContainer" className = { props.active == 'profile' ? "innerProfContainer reveal" : "innerProfContainer"}> 
                
                <div className = "navbackground" style = {{height: 12 + 'vh'}}>
                <Fade top cascade>
                   {props.active == 'profile' && <ul className= "NavMenu">
                        <li onClick={() => animateOut('')}>
                            Home
                        </li>
                        <li onClick={() => animateOut('researchGoals')}>
                            Research Goals
                        </li>
                        <li onClick={() => animateOut('bamlab')}>
                            BamLab
                        </li>
                    </ul> }
                </Fade>
                <Fade> <div className="jobtitle" style = {{padding:0}}>Profile</div></Fade>
                </div>

                <div className = 'Page'>
                <div className='profileSection' id = 'startPoint1'>
                    <div className = "menuList">
                        <img id = "profilePic" src = {Pic}/> 
                
        
                            <ul className="homeNav">
                                <li>
                                    Dr. Farhana Zulkernine
                                    </li>
                                <li>
                                    633 Goodwin Hall
                                    </li>
                                    <a href = "mailto:farhana@cs.queensu.ca"> <li>
                                    farhana@cs.queensu.ca
                                    </li></a>
                                <li>
                                    Queens University
                                    </li>

                            </ul>

                     
                    </div>
                    
                    <div className = "profInfo" style = {{textAlign: 'left'}}> 
                        <p className='subtitle' style = {{textAlign: 'center'}}>
                            Director of BamLab 
                        </p>
                        <p className='jobtitle'>
                            Associate Professor
                        </p>
                        <p style = {{textAlign: 'center'}}className='subsubtitle'>
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
                <div className='extrasection' id = 'oneLine' style={{ backgroundColor: 'rgb(255,255,255)' , width: 70 + '%'}}>
                        <p className='subtitle'   style={{ textAlign: 'center'}} >
                            01. Administrative Info
                      </p>
                    </div>
                        <Fade up> 
                        <div className='section'>
                            <p className='subtitle'>
                                Cognitive Science Program
                        </p>
                            <p className='jobtitle'>
                                Important Information
                        </p>
                        <br/>
                            <p className='subsubtitle'>
                                <li>Detailed Program Information</li>
                                <li>Course Pre-Requisite Chart</li>
                                <li>Frequently Asked Questions</li>
                            </p>



                        </div>
                        </Fade>
                        <Fade up> 
                        <div className='section'>
                            <p className='subtitle'>
                                Teaching
                        </p>
                            <p className='jobtitle'>
                                Courses
                        </p>
                            <p className='subsubtitle'>
                                2020 - 2021
                        </p>
                        <br/>
                            <p className='info'>
                                <li>CISC-874/3.0 Foundations of Neural Networks </li>
                                <li>COGS 100: Introduction to Cognitive Science </li>
                                <li>COGS-400/3.0 Neural and Genetic Cognitive Models</li>
                                <li>CISC-452/3.0 Neural and Genetic Computing</li>
                                <li>CMPE-452/3.0 Neural and Genetic Computing</li>
                            </p>



                        </div>
                        </Fade>
                        <Fade up> 
                        <div className='section'>
                            <p className='subtitle'>
                                Previously Taught
                        </p>
                            <p className='jobtitle'>
                                Courses
                        </p>
                            <p className='subsubtitle'>
                                2017 - 2020
                        </p>
                        <br/>
                            <p className='info'>
                                <li>COGS 100 : Introduction to Cognitive Science</li>
                                <li>COGS 201: Cognition and Computation  </li>
                                <li>COGS 300: Programming Cognitive Models </li>
                                <li>COGS 499: Advanced Undergraduate Project </li>
                                <li>COGS 400/CISC/CMPE 452: Neural and Genetic Cognitive Models</li>
                                <li>CISC 874: Neural and Genetic Computing </li>
                                <li>CISC 432/832: Advanced Database Management Systems</li>
                            </p>



                        </div>
                        </Fade>
                
                </div>
                <div className="Page" id="workExp">
                <div className='extrasection' id = 'oneLine' style={{ backgroundColor: 'rgb(255,255,255)' , width: 70 + '%'}}>
                        <p className='subtitle'   style={{ textAlign: 'center'}} >
                            02. Awards and Funding
                      </p>
                    </div>
                        <Fade up> 
                        <div className='section'>
                            <p className='subtitle'>
                                Awards
                        </p>
                        <br/>
                            <p className='subsubtitle'>
                                <li>Post-doctoral Fellowship award, IBM Canada Research and Development Center (CRDC) and Southern Ontario Smart Computing Innovation Platform (SOSCIP), 2012.</li>
                                <li>NSERC Post Doctoral Fellowship award (declined to accept the IBM/SOSCIP award), Natural Sciences and Engineering Research, 2012.</li>
                                <li>NSERC Industrial Research and Discovery Fellowship (IRDF) award, pre-approved, NSERC, 2012.</li>
                                <li>MITACS Elevate Industrial Postdoctoral Fellowship award, MITACS and CA Technologies, 2010.</li>
                                <li>NSERC Visiting Fellowship (VF) award, nominated, NSERC, 2010.</li>
                                <li>Ontario Centres of Excellence (OCE) - Professional Outreach Award, 2008.</li>
                                <li>Best Paper Award, IEEE SOCNE 07 Workshop at IEEE AINA, 2007, Niagara, Canada.</li>
                            </p>



                        </div>
                        </Fade> 
                        <Fade up> 
                        <div className= 'section' >
                            <p className='subtitle'>
                                Funding
                        </p>
                        <br/>
                        <p className='subsubtitle'>
                                <li>NSERC CRD (Collaborative Research and Development), 2020</li> 
                                <li>Mitacs Accelerate Grants with CUTRIC and Kings Distributed Systems, 2020</li>
                                <li>Queen's Research Opportunities Funds (QROF), 2019</li>
                                <li>New Frontiers in Research Fund (Coinvestigator), 2019</li>
                                <li>NSERC CREATE (co-PI) on Cybersecurity, 2019</li>
                                <li>Canadian Urban Transit Research and Innovation Consortium (CUTRIC), 2019</li>
                                <li>OCE VIP I, 2018</li>
                                <li>IBM, Mitacs, and CIMVHR Funding, collaborators: University of Manitoba and University of Toronto, 2018</li>
                                <li>IBM Centre for Advanced Computing (CAS) research grant, 2018</li>
                                <li>IBM, Mitacs, and CIMVHR Funding, collaborators: University of Manitoba and University of Toronto, 2018</li>
                                <li>Canada Foundation for Innovation (CFI) Grant, 2018</li>
                                <li>NSERC Discovery Grant, 2018</li>
                                <li>IBM CRDC and SOSCIP (Southern Ontario Smart Computing Innovation Platform) Funding, collaborator: Gnowit and IBM, 2017</li>
                                <li>Research Initiation Grant, School of Computing, Queen's University, 2017</li>
                        </p>
                        </div>
                        </Fade> 
                </div>
                
            

               
            </div> 
            
        );
   

}

export default Profile;