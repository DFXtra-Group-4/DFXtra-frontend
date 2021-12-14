

const industryLanding = () => {

  return (
    <div id='industryPage'>
      <div id='nav'>

      </div>
      <div id='requirements'>
        <h2 className="landingHeading"></h2>
        <button className="landingPageButton">
          Request immediate resources
        </button>
        <button className="landingPageButton">
          Reserve resources in advance
        </button>
      </div>
      <div id='orders'>
        <h1 className="landingHeading">Your Orders:</h1>
        <span id="orderSpan">
          <h2 className="landingHeading">
            Immediate Orders:
          </h2>
          <div id='orderDetails'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
          </div>
        </span>
        <span id='futureInterestSpan'>
          <h2 className="landingHeading">
            Future interest:
          </h2>
          <div id='orderDetails'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
          </div>
          <div id='orderDetails'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, accusamus.</p>
          </div>
          <div id='orderDetails'>
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
        <div className="pathDiv">
          <h3 className="landingH3">
            Data Science Path
          </h3>
          <span id='pathInfoSpan'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit impedit et odit aut alias cum consectetur eveniet porro facere.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit impedit et odit aut alias cum consectetur eveniet porro facere.</p>
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
          <span id='pathInfoSpan'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit impedit et odit aut alias cum consectetur eveniet porro facere.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit impedit et odit aut alias cum consectetur eveniet porro facere.</p>
          </span>
          <button className="landingPageButton">
            Course Summary
          </button>
          <button className="landingPageButton">
            Download Syllabus
          </button>
        </div>
      </div>
      <div id='pipelineDiv'>
        <h2 className="landingHeading">View our training information</h2>
        <span className="graphSpan">
          <h3 className="landingH3">Demographics</h3>
          <img></img>
        </span>
        <span className="graphSpan">
          <h3 className="landingH3">Selection Process</h3>
          <img></img>
        </span>
        <span className="graphSpan">
          <h3 className="landingH3">Qyakuty and diligence</h3>
          <img></img>
        </span>
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

export default industryLanding;