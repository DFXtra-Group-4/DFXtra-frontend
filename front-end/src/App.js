import './App.css';
import ScoreCard from './components/ScoreCard';
import TalentCard from './components/Talent';

import IndustryLanding from './components/IndustryLanding';

import Profile from './components/profile'

import EditProfile from './components/editprofile'

function App() {
  return (
    // <Router>
    <div className="App">
      <Profile />
      <EditProfile />

      <h1>Talent Spotlight</h1>
      <div className='spotlightInfo'> </div><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus.</p>
      <TalentCard />
      <ScoreCard />
      {/* <Route path="/" exact component={TalentCard} />
        { <Route path="/signup" exact component={Score}/> }
       */}
      <IndustryLanding />
    </div>
    // </Router>
  );
}

export default App;
