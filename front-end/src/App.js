import './App.css';
import ScoreCard from './components/ScoreCard';
import Talent from './components/Talent';
import IndustryLanding from './components/IndustryLanding';
import ProfileData from './components/ProfileData';
import EditProfile from './components/editprofile';
import Vacancies from './components/vacancies';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/talent" exact element={<Talent />} />
          <Route path="/score" exact element={<ScoreCard />} />
          <Route path="/:_id" exact element={<ProfileData />} />
          <Route path="/:_id/edit" exact element={<EditProfile />} />
          <Route path="/" exact element={<IndustryLanding />} />
          <Route path="/register" exact element={<Registration />} />
          <Route path="/vacancies" exact element={<Vacancies />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
