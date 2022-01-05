import "./App.css";
import ScoreCard from "./components/ScoreCard";
import TalentCard from "./components/Talent";
import IndustryLanding from "./components/industryLanding";
import EditProfile from "./components/editprofile";
import Vacancies from "./components/vacancies";
import Registration from "./components/Registration";
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
			console.log('allprofile data:...', res.data);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	};

	const getProfileData = async () => {
		try {
			console.log("making GET request...");
<<<<<<< HEAD
			const res = await axios.get("http://127.0.0.1:4000/trainee/61d5b44449d8022e22f1594c");
=======
			const res = await axios.get("http://127.0.0.1:4000/trainee/61d5b51fe75bd9374e4c1c83");
>>>>>>> 3a84547d909fe744efd6c649881c3c47bdaedbd8
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

	const updateData = async data => {
		try {
<<<<<<< HEAD
			await axios.put("http://127.0.0.1:4000/trainee/61d5b44449d8022e22f1594c/edit", data);
=======
			await axios.put("http://127.0.0.1:4000/trainee/61d5b51fe75bd9374e4c1c83/edit", data);
>>>>>>> 3a84547d909fe744efd6c649881c3c47bdaedbd8
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
					<Route path="/talent" exact element={<TalentCard data={allProfileData} />} />
					<Route path="/score" exact element={<ScoreCard data={allProfileData} />} />
					<Route
						path="/trainee/:_id"
						exact
						element={<Profile data={profileData} loading={profileLoading} />}
					/>
					<Route
						path="/trainee/:_id/edit"
						exact
						element={<EditProfile profileData={profileData} updateData={updateData} />}
					/>
					<Route path="/" exact element={<IndustryLanding data={allProfileData} />} />
					<Route path="/register" exact element={<Registration registration={true} />} />
					<Route path="/login" exact element={<Registration registration={false} />} />
					<Route path="/vacancies" exact element={<Vacancies />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
