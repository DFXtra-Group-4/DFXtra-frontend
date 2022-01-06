import "./App.css";
import ScoreCard from "./components/ScoreCard";
import TalentCard from "./components/Talent";
import IndustryLanding from "./components/industryLanding";
import EditProfile from "./components/editprofile";
import Vacancies from "./components/vacancies";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import Profile from "./components/profile";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileData, setProfileData] = useState({});

  const [allProfileData, setAllProfileData] = useState({});

  const getAllProfileData = async () => {
    try {
      console.log("making GET request...");
      const res = await axios.get("http://127.0.0.1:4000/trainees");
      console.log("allprofile data:...", res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getProfileData = async () => {
    try {
      console.log("making GET request...");
      const res = await axios.get(
        "http://127.0.0.1:4000/trainee/61d5c3fcece0116dbf94d487"
      );
      setProfileLoading(false);
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setProfileData(await getProfileData());
      setAllProfileData(await getAllProfileData());
    };
    getData();
  }, []);

  const updateData = async (data) => {
    try {
      await axios.put(
        "http://127.0.0.1:4000/trainee/61d5c3fcece0116dbf94d487/edit",
        data
      );
    } catch (e) {
      console.log(e);
    } finally {
      setProfileData(await getProfileData());
    }
  };

  return (
    // <Router>

    // </Router>

    <>
      <Navbar data={profileData} loading={profileLoading} />
      <Router>
        <Routes>
          <Route
            path="/talent"
            exact
            element={<TalentCard data={allProfileData} />}
          />
          <Route
            path="/score"
            exact
            element={<ScoreCard data={allProfileData} />}
          />
          <Route
            path="/trainee/:_id"
            exact
            element={<Profile data={profileData} loading={profileLoading} />}
          />
          <Route
            path="/trainee/:_id/edit"
            exact
            element={
              <EditProfile profileData={profileData} updateData={updateData} />
            }
          />
          <Route
            path="/"
            exact
            element={<IndustryLanding data={allProfileData} />}
          />
          <Route path="/register" exact element={<Login login={true} />} />
          <Route path="/login" exact element={<Login login={false} />} />
          <Route path="/vacancies" exact element={<Vacancies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
