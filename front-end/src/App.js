import './App.css';
import ScoreCard from './components/ScoreCard';
import Talent from './components/Talent';
import IndustryLanding from './components/industryLanding';
import Profile from './components/profile'
import EditProfile from './components/editprofile';
import Vacancies from './components/vacancies';
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
        <Route path="/vacancies" exact element={<Vacancies />} />
      </Routes>
    </Router>

  );
}

export default App;
