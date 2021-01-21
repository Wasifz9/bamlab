import React from 'react'
import Pic from './profilePic.jpg';
import { Fade } from 'react-reveal';
function Profile(props) {
    return (

            <div className = "innerProfContainer">
                <Fade top cascade>
                <ul className="NavMenu">
                    <li onClick={() => props.setActive('')}>
                        Home
                    </li>
                    <li onClick={() => props.setActive('researchGoals')}>
                        Research Goals
                        </li>
                    <li>
                        Farhana Zulkernine
                        </li>
                    <li>
                        BamLab
                        </li>
                    <li>
                        School of Computing
                        </li>

                </ul>
            </Fade>
            <div className='profileSection'>
                <div className = "menuList"> 
                    <img id = "profilePic" src = {Pic}/> 
                    <Fade top cascade>
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
                            <li>
                                School of Computing
                                </li>

                        </ul>

                    </Fade>
                </div>
                
                <div className = "menuList" style = {{textAlign: 'left'}}> 
                    <p className='subtitle'>
                        Director of BamLab 
                    </p>
                    <p className='jobtitle'>
                        Associate Professor
                    </p>
                    <p className='subsubtitle'>
                        Coordinator and Advisor, Cognitive Science Program
                    </p>

                    <p className='info'>

                    Farhana Zulkernine is an Associate Professor and the Coordinator of the Cognitive Science program at the School of Computing at Queen's University. She holds a Ph.D. degree from the School of Computing at Queen's University and is a member of Professional Engineers of Ontario. She has more than 15 years of international work experience in three continents in software design, analysis and research. As a researcher she has worked with CA Technologies, IBM Canada, SAP Germany and Fondazione Bruno Kessler in Italy. Her research interests include service and cloud computing, big data analytics and management, and cognitive computing. She has ongoing research collaborations with IBM Canada, Gnowit, Calian, Kings Distributed Systems, the Centre for Advanced Computing (CAC), Compute Canada, Canadian Primary Care Sentinel Services Network (CPCSSN), and Queen's School of Medicine, Law, and Business. She has taught a wide number of courses in database management systems, cognitive science and machine learning. Her research has been funded by IBM, CFI, MITACS, NSERC CRD, Discovery and CREATE, OCE VIP, CUTRIC, CIMVHR, SOSCIP and Queen's. She has published in many reputed journals and international conferences and served on a variety of conference program and grant committees as an expert in big data and machine learning.

                    </p>
                </div>
            </div>

        </div>
    );
}

export default Profile;