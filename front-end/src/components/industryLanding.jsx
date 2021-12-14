import './css/industryLanding.css';

const IndustryLanding = () => {

  return (
    <div id='industryPage'>
      <div id='nav'>
      </div>
      <div id='spotlight'>
        <h2 className="landingHeading">Talent Spotlight</h2>
        <p id='spotlightInfo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolores voluptatum, nihil repellat libero commodi nulla fuga sapiente deleniti sunt!</p>
        <span id='lowerSpan'>
          <span id='SFGradImg'></span>
          <span id='DSGradImg'></span>
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
        <h2 className="landingHeading">
          Future interest:
        </h2>
        <span id='futureInterestSpan'>
          <div className='orderDetails'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
          </div>
          <div className='orderDetails'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
          </div>
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
      <div id='pipelineDiv'>
        <h2 className="landingHeading">View our pipeline and statistics</h2>
        <span className="graphSpan">
          <h3 className="landingH3">Demographics</h3>
          <img></img>
        </span>
        <span className="graphSpan">
          <h3 className="landingH3">Selection Process</h3>
          <img></img>
        </span>
        <span className="graphSpan">
          <h3 className="landingH3">Quality and diligence</h3>
          <img></img>
        </span>
        <button className='landingPageButton'>Download Data</button>
      </div>
      <div id="latestNews">
        <h2 className="landingHeading">
          Latest New from Digital Futures
        </h2>
        <div className="newsDiv">
          <img></img>
          <h3 className="landingH3">A news story</h3>
        </div>
        <div className="newsDiv">
          <img></img>
          <h3 className="landingH3">A news story</h3>
        </div>
      </div>
    </div>
  )
};

export default IndustryLanding;