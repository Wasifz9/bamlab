import './App.css';
import React, { useState, useRef, useEffect} from 'react';
import { Fade, Reveal } from 'react-reveal';
import TransitionPage from "./transitionPage.js";
import Profile from "./Profile.js";
import BamLab from "./BamLab.js";

function App() {
    const [Active, setActive] = useState('');
    const heightRef = useRef();

    return (
        <div className="App">
            <div className="Page" id="landing">
                {Active == '' && <Fade top cascade>
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
                </Fade>} 
                <div className= {Active == '' ? "home reveal": "home"}>

                    <div className='circleoutline'>
                        <Fade> <div className="pageTitle" style = {{padding:0}}>BamLab</div></Fade>
                        <Fade up delay={250}>
                            <div className="underline"></div>
                        </Fade>
                    </div>

                    <button className="entryButton" onClick={() => setActive('researchGoals')}>ENTER</button>


                </div>
                
                <div className= 'researchGoalsContainer'
                style = {
                    Active == 'researchGoals'
                    ?{
                        width: '100vw' 
                    }
                    : {
                        width: '0px'
                    }
                }>
                     <TransitionPage active = {Active} setActive={setActive} />
                </div>


                <div className= 'profileLargeContainer'
                    ref = {heightRef}
                    style = {
                        Active == 'profile'
                        ?{
                            width: '100vw', 
                        }
                        : {
                            width: '0px'
                        }
                    } >
                     <Profile active = {Active} setActive={setActive}/>
                </div>
                <div className= 'bamLabLargeContainer'
                    style = {
                        Active == 'bamlab'
                        ?{
                            width: '100vw', 
                        }
                        : {
                            width: '0px'
                        }
                    } >
                        <BamLab active = {Active} setActive={setActive}/>
                </div>


            </div>


        </div>
    );

}

export default App;
