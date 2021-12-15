import './App.css';
import ScoreCard from './components/ScoreCard';
import Talent from './components/Talent';
import IndustryLanding from './components/industryLanding';
import Profile from './components/profile'
import EditProfile from './components/editprofile';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/talent" exact element={<Talent />} />
        <Route path="/score" exact element={<ScoreCard />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/editprofile" exact element={<EditProfile />} />
        <Route path="/" exact element={<IndustryLanding />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <h1>Talent Spotlight</h1>
    //   <div className='spotlightInfo'> </div><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia libero ipsam pariatur, exercitationem dignissimos error voluptatem provident optio? Labore, libero. Mollitia quaerat rem officia, quasi accusamus tempore minus voluptatibus.</p>
    //   <TalentCard />
    //   <ScoreCard />
    //   {/* <Route path="/" exact component={TalentCard} />
    //     { <Route path="/signup" exact component={Score}/> }
    //    */}
    //   <IndustryLanding />
    // </div>
    // </Router>
  );
}

export default App;
