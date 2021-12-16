import TalentCard from './Talent';
import ScoreCard from "./ScoreCard"
import IndustryLanding from './IndustryLanding';
const spotLight = () => {
    return(
<div className="App">
    
      <h1>Talent Spotlight</h1>
      <div className='spotlightInfo'> </div><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, 
        exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus.</p>
      <TalentCard />
      <ScoreCard />
      {/* <Route path="/" exact component={TalentCard} />
        { <Route path="/signup" exact component={Score}/> }
       */}
      <IndustryLanding />
    </div>
    )
    }
    export default spotLight;
