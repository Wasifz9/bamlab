import React from 'react';

function transitionPage(props) {

    function animateOut(page){
        document.getElementById("transPage").classList.toggle("reveal");
       
        setTimeout(function() {
            props.setActive(page)
        },500)
    }


    return (
        <div id = 'transPage' className = {props.active == 'researchGoals' ? "reveal" : "" }> 
            <div className = 'navigation'> 
                <p className = 'sectionTitle' style = {{float: 'left'}} onClick={() => animateOut('bamlab')}>{String.fromCharCode(8592) + ' BamLab'}</p>
                <p className = 'sectionTitle' style = {{float: 'right'}}  onClick={() => animateOut('profile')}> {'Farhana Zulkernine ' +  String.fromCharCode(8594)} </p>
            </div>
            
            <div className="transitionpage">
                <div className="innerContainer">
                    <div className="pageTitle" id = 'researchText'>Research Goals </div>
                    <div className="underline"></div>
                    <p className="jobtitle">01. Address specific data analytic problems and predictive analytics in a variety of data domains.</p>
                    <p className="jobtitle">02. Develop/Implement machine learning models to develop autonomous systems, decision support tools and big data management solutions.</p>
                    <p className="jobtitle">03. Apply cognitive computing techniques and concepts to develop computational tools and software for advancing/assisting human cognitive capabilities in education, computer games or general perception. </p>
                    <p className="jobtitle ">04. Develop and maintain tools which handle data from ifferent domains, support a number of multi-tenant big data stores, and provide an analytic workflow management system.</p>
                </div>
            </div>
        </div>

    );
}

export default transitionPage;