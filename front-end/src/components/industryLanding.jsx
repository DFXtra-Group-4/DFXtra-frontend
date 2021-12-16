import './css/industryLanding.css';

const IndustryLanding = () => {

  return (
    <div id='industryPage'>
      <div id='spotlight'>
        <h2 className="landingHeading">Talent Spotlight</h2>
        <p id='spotlightInfo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolores voluptatum, nihil repellat libero commodi nulla fuga sapiente deleniti sunt!</p>
        <span id='lowerSpan'>
          <span id='SFGradImg'>
            <span className='profileImage'>
              <img className='spotlightImg'></img>
            </span>
            <span className='profileImage'>
              <img className='spotlightImg'></img>
            </span>
            <span className='profileImage'>
              <img className='spotlightImg'></img>
            </span>
            <span className='profileImage'>
              <img className='spotlightImg'></img>
            </span>
          </span>
          <span id='DSGradImg'>
            <span className='profileImage'>
              <img className='spotlightImg'></img>
            </span>
            <span className='profileImage'>
              <img className='spotlightImg'></img>
            </span>
            <span className='profileImage'>
              <img className='spotlightImg'></img>
            </span>
            <span className='profileImage'>
              <img className='spotlightImg'></img>
            </span>
          </span>
          <button className='landingPageButton'>View spotlight details</button>
        </span>
      </div>
      <div id='requirements'>
        <h2 className="landingHeading">Requirements</h2>
        <button className="landingPageButton">
          Request immediate resources
        </button>
        <button className="landingPageButton">
          Reserve resources in advance
        </button>
      </div>
      <div id='orders'>
        <h2 className="landingHeading">Your Orders:</h2>
        <h2 className="landingHeading">
          Immediate Orders:
        </h2>
        <span id="orderSpan">
          <div className='orderDetails'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
          </div>
        </span>
      </div>
      <div id='trainingInformation'>
        <h2 className="landingHeading">View our training information</h2>
        <span id='trainingSpan'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit impedit et odit aut alias cum consectetur eveniet porro facere.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit impedit et odit aut alias cum consectetur eveniet porro facere.</p>
        </span>
        <span id='trainingLayoutSpan'>
          <div className="pathDiv">
            <h3 className="landingH3">
              Data Science Path
            </h3>
            <span className='pathInfoSpan'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </span>
            <button className="landingPageButton">
              Course Summary
            </button>
            <button className="landingPageButton">
              Download Syllabus
            </button>
          </div>
          <div className="pathDiv">
            <h3 className="landingH3">
              Cloud Engineering Path
            </h3>
            <span className='pathInfoSpan'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </span>
            <button className="landingPageButton">
              Course Summary
            </button>
            <button className="landingPageButton">
              Download Syllabus
            </button>
          </div>
        </span>
      </div>
    </div>
  )
};

export default IndustryLanding;