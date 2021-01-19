import './App.css';
import React from 'react';
import Fade from 'react-reveal/Fade';

class App extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
  return (
    <div className="App">
        
          <div className = "Page" id ="landing">
              <div className = "home"> 
                <Fade> <div className = "pageTitle">Eli Westlake</div></Fade>
                <Fade up delay = {500}> 
                <ul className = "homeNav">
                    <li> your.email@gmail.com </li> 
                    <li> 613-912-1234 </li>
                </ul> 
                </Fade>
              </div>
          </div>
        
        <Fade left> <div className = "sectionTitle">01. Work Experience</div> </Fade>
        <div className = "Page" id = "workExp">
          <Fade up delay = {500}> 
            <div className = 'section'>
                      <p className = 'subtitle'>
                          RBC Analytics and Innovation
                      </p>
                      <p className = 'jobtitle'>
                          software engineer
                      </p>
                      <p className = 'subsubtitle'>
                          summer '20
                      </p>

                                  <p className ='info'>
                                  
                                      <li>Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.</li>
                                      <li>Configured Master Jenkins to control Jenkins Agents on different operating systems.  </li>  
                                      <li>Containerized Portfolio Insights application on Docker and deployed on Openshift. </li> 
                                      <li>Trained in both AWS and Kubernetes while documenting for team use on Confluence. </li>  
                                      <li>Presented secret management strategy to senior management and documented Vault tutorial for team use.</li>  
                              
                                  </p>



              </div>
           </Fade>
           <Fade up up delay = {500}>
            <div className = 'section'>
                      <p className = 'subtitle'>
                          RBC Analytics and Innovation
                      </p>
                      <p className = 'jobtitle'>
                          software engineer
                      </p>
                      <p className = 'subsubtitle'>
                          summer '20
                      </p>
              
                                  <p className ='info'>
                                      <li>Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.</li>
                                      <li>Configured Master Jenkins to control Jenkins Agents on different operating systems.  </li>  
                                      <li>Containerized Portfolio Insights application on Docker and deployed on Openshift. </li> 
                                      <li>Trained in both AWS and Kubernetes while documenting for team use on Confluence. </li>  
                                      <li>Presented secret management strategy to senior management and documented Vault tutorial for team use.</li>  
                                  </p>



              </div>
           </Fade>
           <Fade up up delay = {500}>
            <div className = 'section'>
                      <p className = 'subtitle'>
                          RBC Analytics and Innovation
                      </p>
                      <p className = 'jobtitle'>
                          software engineer
                      </p>
                      <p className = 'subsubtitle'>
                          summer '20
                      </p>
              
                                  <p className ='info'>
                                      <li>Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.</li>
                                      <li>Configured Master Jenkins to control Jenkins Agents on different operating systems.  </li>  
                                      <li>Containerized Portfolio Insights application on Docker and deployed on Openshift. </li> 
                                      <li>Trained in both AWS and Kubernetes while documenting for team use on Confluence. </li>  
                                      <li>Presented secret management strategy to senior management and documented Vault tutorial for team use.</li>  
                                  </p>



              </div>
           </Fade>
        </div>  
        <Fade right> <div className = "sectionTitle" style = {{textAlign: 'right'}}>02. Extra-Curriculars</div> </Fade>
        <div className = "Page" id = "extraCurr">
        <Fade left>
          <div className = 'extrasection'>
          <p className = 'subtitle'>
                          Food Drive
                      </p>
                      <p className = 'jobtitle'>
                          marketing lead
                      </p>
                      <p className = 'subsubtitle'>
                          fall '20
                      </p>
                      <br/>
                      <p className ='info'>
                                      Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.
                                      Configured Master Jenkins to control Jenkins Agents on different operating systems. 
                      </p>


          </div>
          <div className = 'extrasection'>
          <p className = 'subtitle'>
                          Spero
                      </p>
                      <p className = 'jobtitle'>
                          finance lead
                      </p>
                      <p className = 'subsubtitle'>
                          fall '20
                      </p>
                      <br/>
                      <p className ='info'>
                                      Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.
                                      Configured Master Jenkins to control Jenkins Agents on different operating systems. 
                      </p>
          </div>
          </Fade>
          <Fade right delay = {500}>
          <div className = 'extrasection'>
          <p className = 'subtitle'>
                          Food Drive
                      </p>
                      <p className = 'jobtitle'>
                          marketing lead
                      </p>
                      <p className = 'subsubtitle'>
                          fall '20
                      </p>
                      <br/>
                      <p className ='info'>
                                      Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.
                                      Configured Master Jenkins to control Jenkins Agents on different operating systems. 
                      </p>


          </div>
          <div className = 'extrasection'>
          <p className = 'subtitle'>
                          Spero
                      </p>
                      <p className = 'jobtitle'>
                          finance lead
                      </p>
                      <p className = 'subsubtitle'>
                          fall '20
                      </p>
                      <br/>
                      <p className ='info'>
                                      Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.
                                      Configured Master Jenkins to control Jenkins Agents on different operating systems. 
                      </p>
          </div>
          </Fade>
        </div>

        <Fade up>
        
        <div className = "sectionTitle">03. Education</div>
        <div id = "education">
          <div className = 'section' style = {{width: '90%', padding: 20 + 'px', margin: 30 + 'px'}}>
                        <p className = 'subtitle'>
                            University of Toronto
                        </p>
                        <p className = 'jobtitle'>
                            BASc: Computer Engineering
                        </p>
                        <p className = 'subsubtitle'>
                            Sept 2017 - Current
                        </p>
                </div>
          </div>
          </Fade>

    </div>
  );
  }
}

export default App;
