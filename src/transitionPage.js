import React from 'react';

function transitionPage(props) {

    function animateOut(page){
        document.getElementById("transPage").classList.toggle("reveal");
       
        setTimeout(function() {
            props.setActive(page)
        },1500)
    }


    return (
        <div id = 'transPage' className = {props.active == 'researchGoals' ? "transitionPageContainer reveal" : "transitionPageContainer" }> 
            <div className="transitionpage">
                <div className="innerContainer">
                    <div className="pageTitle">Research Goals </div>
                    <div className="underline"></div>
                    <p className="jobtitle">01. Address specific data analytic problems and predictive analytics in a variety of data domains.</p>
                    <p className="jobtitle">02. Develop/Implement machine learning models to develop autonomous systems, decision support tools and big data management solutions.</p>
                    <p className="jobtitle">03. Apply cognitive computing techniques and concepts to develop computational tools and software for advancing/assisting human cognitive capabilities in education, computer games or general perception. </p>
                    <p className="jobtitle ">04. Develop and maintain tools which handle data from ifferent domains, support a number of multi-tenant big data stores, and provide an analytic workflow management system.</p>
                </div>
            </div>
            <div className = "menuList">
                    <ul className = "mainNav">
                        <li onClick={() => props.setActive('bamlab')}> 
                            BamLab
                        </li>
                        <li onClick={() => animateOut('profile')}>
                            Dr. Zulkernine
                        </li>
                    </ul>
            </div>
        </div>

    );
}

export default transitionPage;