import './App.css';
import ScoreCard from './components/ScoreCard';
import TalentCard from './components/Talent';
import IndustryLanding from './components/industryLanding';
import EditProfile from './components/editprofile';
import Vacancies from './components/vacancies';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import Profile from "./components/profile";
import axios from 'axios';
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileData, setProfileData] = useState({});

  const getProfileData = async () => {
    try {
      console.log('making GET request...');
      const res = await axios.get('http://127.0.0.1:4000/trainee/dc1ac1002b92436dc4c010b2');
      setProfileLoading(false);
      console.log(res.data);
      return res.data;
    }
    catch (e) { console.log(e) };
  };

  useEffect(() => {
    const getData = async () => {
      setProfileData(await getProfileData());
    }
    getData();
  }, []);

  const updateData = async (data) => {
    try {
      await axios.put('http://127.0.0.1:4000/trainee/dc1ac1002b92436dc4c010b2/edit', data);
    }
    catch (e) {
      console.log(e)
    }
    finally {
      setProfileData(await getProfileData());
    }
  };

  return (
    // <Router>

    // </Router>

    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/talent" exact element={<TalentCard />} />
          <Route path="/score" exact element={<ScoreCard />} />
          <Route path="/trainee/:_id" exact element={<Profile data={profileData} loading={profileLoading} />} />
          <Route path="/trainee/:_id/edit" exact element={<EditProfile profileData={profileData} updateData={updateData} />} />
          <Route path="/" exact element={<IndustryLanding />} />
          <Route path="/register" exact element={<Registration registration={true} />} />
          <Route path="/login" exact element={<Registration registration={false} />} />
          <Route path="/vacancies" exact element={<Vacancies />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
