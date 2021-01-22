import React, { useState } from 'react'
import Pic from './profilePic.jpg';
import Fig1 from './fig1.jpg';
import Fig2 from './fig2.jpg';
import Fig3 from './fig3.jpg';
import Fig4 from './fig4.jpg';
import Fig5 from './fig5.jpg';
import Fig6 from './fig6.jpg';
import Fig7 from './fig7.jpg';
import Fig8 from './fig8.jpg';
import Fig9 from './fig9.jpg';
import { Fade } from 'react-reveal';
import { render } from '@testing-library/react';




function BamLab(props) {
    function animateOut(page) {
        document.getElementById("bamPage").classList.toggle("reveal");

        setTimeout(function () {
            props.setActive(page)
        }, 650)
    }
    return (
        <div id="bamPage" className={props.active == 'bamlab' ? "reveal" : ""}>

            <Fade top cascade>
                {props.active == 'bamlab' && <ul className="NavMenu">
                    <li onClick={() => animateOut('')}>
                        Home
                        </li>
                    <li onClick={() => animateOut('researchGoals')}>
                        Research Goals
                        </li>
                    <li onClick={() => animateOut('profile')}>
                        Farhana Zulkernine
                        </li>
                    <a href = "https://www.cs.queensu.ca/" target="_blank">
                    <li>
                        School of Computing
                    </li>
                    </a>

                </ul>}
            </Fade>

            <Fade top cascade>
                {props.active == 'bamlab' && <ul className="BamMenu">
                    <li style={{ color: 'black', fontSize: 22 + 'px', pointerEvents: 'none' }}>
                        BamLab
                        </li>
                      
 
                        <a href="https://research.cs.queensu.ca/home/farhana/bam-lab/people/" target="_blank">
                        <li>
                            People
                        </li>
                        </a>
                        <a href="https://research.cs.queensu.ca/home/farhana/bam-lab/publications/" target="_blank">
                        <li>
                            Publications
                        </li>
                        </a>
                        <a href="https://research.cs.queensu.ca/home/farhana/bam-lab/wiki/" target="_blank">
                        <li>
                            Wiki
                        </li>
                        </a>

                </ul>}
            </Fade>
            <div className='Page' id = 'landing'>
                <div className='profileSection' >

                    <div className="menuList" style={{ textAlign: 'left' }}>
                        <p className='subtitle' style={{ textAlign: 'left' }}>
                            BamLab
                            </p>
                        <p className='jobtitle' style={{ textAlign: 'center' }}>
                            Big-Data Analytics and Management Laboratory
                            </p>
                        <p className='subsubtitle'>
                            633 Goodwin Hall
                            </p>
                        <br />
                        <p className='subsubtitle'>
                            <span style={{ fontWeight: 'bold' }}> Open Positions: </span>
                            <li> PhD position in large graph data management and analytics</li>
                            <li> MSc in autonomous vehicular data analytics </li>
                            <br />
                                What we're looking for!
                                <li>Motivated</li>
                            <li>Goal oriented</li>
                            <li>Excellent communication and technical writing skills</li>
                            <li>Good organizational and leadership capabilities</li>
                            <br />
                                To apply for an open position:
                                <li>A cover letter stating the position in which you are interested</li>
                            <li>Your competitive qualifications and eligibility to join the group</li>
                            <li>A resume and sample of your best written work!</li>
                        </p>
                    </div>
                </div>

                <button className="entryButton" style ={{pointerEvents: 'none', color: 'black' }}>SCROLL TO VIEW PROJECTS</button>
            </div>
            <Fade> <div className="pageTitle" style={{ textAlign: 'center' }}>Projects</div></Fade>
            <Fade up delay={500}> <div className="underline"></div></Fade>

            <div className="Page" id="extraCurr">
            <Fade>   
                    <div className='extrasection' id = 'oneLine' style={{ backgroundColor: 'rgb(255,255,255)' , width: 70 + '%'}}>
                        <p className='subtitle'   style={{ textAlign: 'center'}} >
                            01. Data Analytics
                      </p>
                    </div>
            </Fade>
                <Fade left delay={500}>
                    <div className='extrasection' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                        <p className='subtitle'>
                            Medical Data Analytics and Decision Support for Disease Diagnosis
                      </p>
                        <p className='jobtitle'>
                            Research on Electronic Medical Records (EMR) and the data stored in the CPCSSN (Canadian Primary Care Sentinel Services Network) data bank.
                      </p>
                        <p className='jobtitle'>
                            CPCSSN store currently holds 1.6 million patient data shared by primary care physicians from many provinces and territories across Canada and serves as a valuable source of anonymized health data.
                      </p>
                    </div>
                    <div className='extrasection'>
                        <p className='subsubtitle'>
                            Diagnosing Hypertension: Developed a neural network model to predict hypertension from structured medical data from patients' health records. We obtained about 82% accuracy. [Lafreniere et al., 2016]
                         </p>
                        <br />
                        <img src={Fig1} id='fig1' />
                    </div>

                    <div className='extrasection'>
                        <p className='subsubtitle'>
                            Diagnosing chronic low back pain: Created a tool for extracting knowledge from doctors chart notes for diagnosing chronic low backpain [Judd et al, 2018]. The tool implements a data analytic pipeline using a 3rd party script for anonymizing medical text data, CTAKES for extracting medical terms, and ensemble learning using a variety of machine learning models for disease diagnosis.                         </p>
                        <br />
                        <img src={Fig2} id='fig1' />
                    </div>

                    <div className='extrasection'>
                        <p className='subsubtitle'>
                            Diagnosing chronic low back pain: Created a tool for extracting knowledge from doctors chart notes for diagnosing chronic low backpain [Judd et al, 2018]. The tool implements a data analytic pipeline using a 3rd party script for anonymizing medical text data, CTAKES for extracting medical terms, and ensemble learning using a variety of machine learning models for disease diagnosis.                         </p>
                        <br />
                        <img src={Fig3} id='fig1' />
                    </div>


                </Fade>
                <Fade right delay={500}>

                    <div className='extrasection' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                        <p className='subtitle'>
                            Stock Market Prediction
                      </p>
                        <p className='jobtitle'>
                            The three component Proposed Hybrid Model (PHM) [Wang et al., 2012] was implemented to predict daily stock index.
                      </p>
                        <p className='jobtitle'>
                            Although PHM performed well for weekly stock prices, the results showed that the back propagation neural network (BPNN) model performed better than the other two component models of ARIMA (Auto Regressive Integrated Moving Average) and the ESM (Exponential Smoothing Model).
                      </p>
                    </div>
                    <div className='extrasection'>
                        <p className='subsubtitle'>
                            Stock Market Prediction
                        </p>
                        <br/>
                        <img src={Fig4} id='fig1' />
                    </div>


                </Fade>
                <Fade left delay={500}>
                    <div className='extrasection' id = 'oneLine' style={{ backgroundColor: 'rgb(255,255,255)' , width: 70 + '%'}}>
                        <p className='subtitle'   style={{ textAlign: 'center'}} >
                           02. NLP and Text Analytics
                      </p>
                    </div>

                    <div className='extrasection'>
                        <p className='subtitle'>
                        Query Expansion for Knowledge Extraction:
                        </p>
                        <p className='jobtitle'>
                             With industry partner Gnowit, developed a query expansion algorithm for expanding query terms to effectively search for matching webpages from large online web documents using DataMuse API and word2vec techniques.
                        </p>
                    </div>
                    <div className='extrasection'>
                    <p className='subtitle' >
                        Clustering Large Text Data: 
                    </p>
                    <p className='jobtitle'>
                        Implement text analytics algorithms (particle swarm optimization), SPARK-PSO, on big data analytics platforms such as Apache Spark for fast in-memory distributed analytics of large text data [Sherar et al, 2017].
                    </p>
                    </div>
                    </Fade>
                    <Fade right delay={500}>
                    <div className='extrasection'>
                    <p className='subtitle' >
                        CAPRI:  
                    </p>
                    <p className='jobtitle'>
                    Extracts frequent, infrequent and rare patterns and association rules from semi-structured mainframe log data files containing complex and hybrid line patterns [Zulkernine et al., 2012].                    </p>
                    </div>
                    <div className='extrasection'>
                    <p className='subtitle' >
                    Topic Modeling: 
                    </p>
                    <p className='jobtitle'>
                    Implement various LSA, LDA, pLSA, and deep belief network [Chanderdhar Sharma and Marwa Chermiti] for the 20-Newsgroup dataset to extract topics and a neural network model to classify the text data based on the topics.                    
                    </p>
                    </div>
                    </Fade>

            </div>

            <div className="Page" id="extraCurr">
            <div className='extrasection' id = 'oneLine' style={{ backgroundColor: 'rgb(255,255,255)' , width: 70 + '%'}}>
                        <p className='subtitle'   style={{ textAlign: 'center'}} >
                           03. Cognitive Computing
                         </p>
            </div>
                <Fade left delay={500}>
                    <div className='extrasection' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                        <p className='subtitle'>
                        Identifying Reportable Diseases for Ministry of Health and Long Term Care
                      </p>
                        <p className='jobtitle'>
                        Created a cognitive data analytic and decision support pipeline for classifying noisy medical data based on schema and ministry specified guidelines using both a rule based and a neural network approach to identify reportable critical diseases [Lucas Rychlo].                   
                        </p>
                    </div>
                    <div className='extrasection' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                        <p className='subtitle'>
                        A voice-controlled e-commerce application using IBM Watson
                      </p>
                        <p className='jobtitle'>
                        Reviewed state-of-the-art speech recognition systems, proposed a taxonomy and developed a speech enabled e-commerce website to increase accessibility of such websites using IBM Watson speech-to-text API and cloud services [Kandhari et al., 2018].                        </p>
                    </div>
                    <div className='extrasection' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                        <p className='subtitle'>
                        Autonomous Cars
                      </p>
                        <p className='jobtitle'>
                        Our CUTRIC funded project focuses on extracting key features from vehicular data for efficient V2V and V2I communication    
                        </p>
                        <p className='subsubtitle'>
                        In an exploratory study, undergraduate students (Daisy Barrette and Alex Weatherhead) constructed two different versions of autonomous cars, one using ultrasonic sensors and deep learning models, and another using camera and deep convolutional networks, where the cars were trained to autonomously drive by sensing track boundaries. The model cars were made using raspberry pi with bluetooth connections, arduino uno and commercially available cheap sensors.        
                        </p>
                    </div>


                    <div className='extrasection'>
                    <p className='subsubtitle'>
                        Autonomous Cars </p>
                        <br />
                        <img src={Fig5} id='fig1' />
                    </div>
                    <div className='extrasection'>
                    <p className='subsubtitle'>
                        Autonomous Cars </p>
                        <br />
                        <img src={Fig6} id='fig1' />
                    </div>

                    <div className='extrasection' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                        <p className='subtitle'>
                        Autonomous Car Tracking
                      </p>
                        <p className='jobtitle'>
                        Used evolutionary computing with feed forward neural network to train a vehicle to successfully navigate a track in the shortest time possible [Song et al., 2017]. The fitness criteria included successful completion of the track without hitting any walls at maximum speed.                        
                        </p>
                        <iframe src="https://www.youtube.com/embed/kiYEA9gJ4dU"
                                height = '250'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                        />
                    </div>



                </Fade>
                <Fade right delay={500}>
                    <div className='extrasection' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                        <p className='subtitle'>
                        Vehicle Detection using Computer Vision
                      </p>
                        <p className='jobtitle'>
                        In this project, we implemented two different deep learning models based on YOLO series algorithms and compared their performances in detecting vehicles such as cars and trucks for self-driving cars to ensure road safety.                      </p>
                        <p className='jobtitle'>
                        In detecting the vehicles within 50 meters, the two variations of our models, YOLO and YOLOv3, achieved 93.75% and 96.88% mean recall, and 82.50% and 97.92% F1-measure on a two-way road with a detection speed of 19 fps and 74 fps respectively.                      </p>
                    </div>

                    <div className='extrasection'>
                        <p className='subsubtitle'>
                           Vehicle Detection using Computer Vision
                        </p>
                        <br/>
                        <img src={Fig7} id='fig1' />
                    </div>


                </Fade>
                <Fade left delay={500}>
                <div className='extrasection' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                        <p className='subtitle'>
                        Computer Vision
                      </p>
                        <p className='jobtitle'>
                        Video Object Tracking: Leveraged the YOLOv2 architecture with a 2-D recurrent LSTM to implement a predictive video object detector and tracker (POD) [Gasmallah et al, 2018].
                        </p>
                        <br/>
                        <img src={Fig8} id='fig1' />
                        <br/>
                        <p className='jobtitle'>
                        Another project focused on detection and measurement of sphroids, a model for cancer cell study.                     
                         </p>
                    </div>

                    </Fade>
                    <Fade right delay={500}>
                        <div className='extrasection' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                            <p className='subtitle'>
                            Wearable Sensors and IoT
                        </p>
                            <p className='jobtitle'>
                                Fall Detection using Wearable Sensors: A deep learning model was implemented and trained offline using the public MobiAct dataset and later deployed in a streaming IoT data analytics framework for fall detection using MbientLab sensor MetaMotion R [Ajerla et al., 2018].
                            </p>
                            <img src={Fig9} id='fig1' />
                        </div>
                    </Fade>

            </div>
        </div>
    );
}

export default BamLab;