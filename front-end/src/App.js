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
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function App() {
	const [profileLoading, setProfileLoading] = useState(true);
	const [profileData, setProfileData] = useState({});
	const [login, setLogin] = useState({});
	const [logout, setLogout] = useState(true);
	const [allProfileData, setAllProfileData] = useState({});

	const navigate = useNavigate();


	const getAllProfileData = async () => {
		try {
			console.log("making GET request...");
			const res = await axios.get("http://127.0.0.1:4000/trainees");
			setProfileLoading(false);
			console.log("allprofile data:...", res.data);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	};

	const getProfileData = async () => {
		try {
			console.log("making GET request...");
			const res = await axios.get(`http://127.0.0.1:4000/trainee/${login.email}`);
			setProfileLoading(false);
			console.log(res.data);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const getData = async () => {
			setAllProfileData(await getAllProfileData());
			setProfileData(await getProfileData());
		};
		getData();
		console.log("logout is..", logout);
	}, []);



	// useEffect(() => {
	// 	replace({
	// 		goTo: '/login',
	// 		when: !isLoggedIn,
	// 		onPaths: ['/dashboard/**, 'analytics/**', '/profile/**', '/messages/**'],
	//   otherwiseGoTo: '/app/dashboard', 
	// })

	// }, [isLoggedIn])

	const updateData = async data => {
		try {
			await axios.put(`http://127.0.0.1:4000/trainee/${login.email}/edit`, data);
		} catch (e) {
			console.log(e);
		} finally {
			setProfileData(await getProfileData());
		}
	};

	const navigateTo = (string) => {
		navigate(string);
	};

	return (
		<>
			{console.log("logout before is ", logout)}
			<Navbar data={profileData} loading={profileLoading} logout={logout} />

			<Routes>
				<>
					<Route
						path="/talent"
						exact
						element={<TalentCard data={allProfileData} navigateTo={navigateTo} logout={logout} />}
					/>
					<Route
						path="/score"
						exact
						element={<ScoreCard data={allProfileData} navigateTo={navigateTo} logout={logout} />}
					/>
					<Route
						path="/trainee/:_id"
						exact
						element={<Profile data={profileData} loading={profileLoading} navigateTo={navigateTo} logout={logout} />}
					/>
					<Route
						path="/trainee/:_id/edit"
						exact
						element={
							<EditProfile
								profileData={profileData}
								updateData={updateData}
								navigateTo={navigateTo}
								logout={logout}
							/>
						}
					/>
					<Route
						path="/landing"
						exact
						element={<IndustryLanding data={allProfileData} logout={logout} navigateTo={navigateTo} logout={logout} />}
					/>
					<Route path="/vacancies" exact element={<Vacancies />} />
				</>
				<Route
					path="/"
					exact
					element={<Login setLogin={setLogin} setLogout={setLogout} logout={logout} />}
				/>
			</Routes>
		</>
	);
}

export default App;
