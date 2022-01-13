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
import CompanyProfile from "./components/CompanyProfile";

function App() {
	const [profileData, setProfileData] = useState({});
	const onRefresh = JSON.parse(localStorage.getItem("user"));
	const [login, setLogin] = useState(onRefresh);
	const [allProfileData, setAllProfileData] = useState([]);
	const [allCompanyData, setAllCompanyData] = useState({});

	const navigate = useNavigate();

	const getAllProfileData = async () => {
		try {
			const res = await axios.get(
				//`${process.env.REACT_APP_URL}/trainees`
				"http://ec2-54-204-116-186.compute-1.amazonaws.com:4000/trainees"
			);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	};

	const getProfileData = async () => {
		try {
			const res = await axios.get(
				`http://ec2-54-204-116-186.compute-1.amazonaws.com:4000/trainee/${login.email}`
			);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	};

	const getCompanyData = async () => {
		try {
			console.log("making GET request...");
			const res = await axios.get(
				`http://ec2-54-204-116-186.compute-1.amazonaws.com:4000/vacancies`
			);
			console.log("company data is...", res.data);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const getData = async () => {
			setAllProfileData(await getAllProfileData());
			setProfileData(await getProfileData());
			setAllCompanyData(await getCompanyData());
		};
		getData();
		console.log("login is..", login);
	}, [login]);

	const updateData = async data => {
		try {
			await axios.put(
				`http://ec2-54-204-116-186.compute-1.amazonaws.com:4000/trainee/${login.email}/edit`,
				data
			);
		} catch (e) {
			console.log(e);
		} finally {
			setProfileData(await getProfileData());
		}
	};

	const [delRequest, setDelRequest] = useState({});
	const sendDelRequest = async id => {
		try {
			await axios.put(
				`http://ec2-54-204-116-186.compute-1.amazonaws.com:4000/trainee/${login.email}/edit/delete`,
				id
			);
		} catch (e) {
			console.log(e);
		} finally {
			setDelRequest({ id: id });
			setProfileData(await getProfileData());
		}
	};

	const navigateTo = string => {
		navigate(string);
	};

	return (
		<>
			<Navbar data={profileData} navigateTo={navigateTo} />

			<Routes>
				<Route
					path="/talent"
					exact
					element={<TalentCard allProfileData={allProfileData} navigateTo={navigateTo} />}
				/>
				<Route
					path="/score"
					exact
					element={<ScoreCard data={allProfileData} navigateTo={navigateTo} />}
				/>
				<Route
					path="/trainee/:_id"
					exact
					element={<Profile data={profileData} navigateTo={navigateTo} />}
				/>
				<Route
					path="/trainee/:_id/edit"
					exact
					element={
						<EditProfile
							profileData={profileData}
							updateData={updateData}
							navigateTo={navigateTo}
							sendDelRequest={sendDelRequest}
						/>
					}
				/>
				<Route
					path="/landing"
					exact
					element={<IndustryLanding data={allProfileData} navigateTo={navigateTo} />}
				/>
				<Route
					path="/vacancies"
					exact
					element={<Vacancies navigateTo={navigateTo} allCompanyData={allCompanyData} />}
				/>
				<Route
					path="/company/:companyName"
					exact
					element={<CompanyProfile allCompanyData={allCompanyData} />}
				/>

				<Route
					path="/"
					exact
					element={
						<Login
							setLogin={setLogin}
							allProfileData={allProfileData}
							loginState={login}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
