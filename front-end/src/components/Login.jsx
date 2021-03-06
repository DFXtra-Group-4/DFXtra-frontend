import "./css/registration.css";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";
import validateInputs from "./utils/inputValidations";

const Login = ({ setLogin, allProfileData, loginState }) => {
	const form = useRef();
	const checkBtn = useRef();

	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState(``);

	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	let navigate = useNavigate();

	const onChangeEmail = e => {
		const newEmail = e.target.value;
		setUser(prevstate => ({
			...prevstate,
			email: newEmail
		}));
		console.log(user);
	};

	const onChangePassword = e => {
		const newPassword = e.target.value;
		setUser(prevstate => ({
			...prevstate,
			password: newPassword
		}));
		console.log(user);
	};

	const filterProfile = data => {
		console.log("login filter data input", data.email);
		console.log("allprofiles", allProfileData);
		const filtered = allProfileData.filter(
			profiles => profiles.personalDetails.contact.email.workEmail === data.email
		);
		console.log("fitlered is ", filtered);
		return filtered[0]._id;
	};

	const login = async user => {
		try {
			const res = await axios.post(
				`https://cors-anywhere.herokuapp.com/http://ec2-54-204-116-186.compute-1.amazonaws.com:4000/login`,
				user
			);
			const data = await res.data;
			localStorage.setItem(`user`, JSON.stringify(res.data.user));
			return data;
		} catch (error) {
			console.log("error is", error);
			return { error: error.response.data.message };
		}
	};

	const handleLogin = async e => {
		e.preventDefault();
		setMessage("");
		setLoading(true);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			const loggedInUser = await login(user);
			const loggedInUserParam = loggedInUser.user;
			if (localStorage.getItem("user") && loggedInUser.user.roles[0] === "Graduate") {
				setLogin(loggedInUser.user);
				setMessage(loggedInUser.message);
				// alert(loggedInUser.message); // Just for testing purpose
				navigate(`/trainee/${filterProfile(loggedInUserParam)}`);
			} else if (localStorage.getItem("user") && loggedInUser.user.roles[0] === "Industry") {
				setLogin(loggedInUser.user);
				setMessage(loggedInUser.message);
				navigate(`/company/${loggedInUser.user.name}`);
			} else {
				setMessage(loggedInUser.error);
				setLoading(false);
				// alert(loggedInUser.error); // Just for testing purpose
			}
		} else {
			setLoading(false);
		}
	};

	// useEffect(() => {
	//   filterProfile(JSON.parse(localStorage.getItem("user")));
	// }, [])

	return (
		<>
			{/* {localStorage.getItem("user") &&
        navigate(`/trainee/${filterProfile(JSON.parse(localStorage.getItem("user")).email)}`)} */}
			<div id="nav">
				<p className="DFX" style={{ color: "#fff" }}>
					{"DFX"}
				</p>
			</div>
			<div className="col-md-12">
				<div className="card card-container">
					<h1>Sign in to DFX</h1>
					<img
						src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
						alt="profile-img"
						className="profile-img-card"
					/>

					<Form onSubmit={handleLogin} ref={form}>
						<div className="form-group">
							<label htmlFor="Email">Email</label>
							<Input
								type="text"
								className="form-control"
								name="email"
								value={user.email}
								onChange={onChangeEmail}
								validations={[validateInputs.required, validateInputs.validEmail]}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<Input
								type="password"
								className="form-control"
								name="password"
								value={user.password}
								onChange={onChangePassword}
							/>
						</div>
						<div className="form-group">
							<button
								className="btn btn-primary btn-block"
								disabled={loading}
								type="submit"
							>
								{loading && (
									<span className="spinner-border spinner-border-sm"></span>
								)}
								<span>Login</span>
							</button>
						</div>

						{message && (
							<div className="form-group fg1">
								<div
									className="alert alert-danger"
									role="alert"
									style={{ marginTop: "20px", color: "red", textAlign: "center" }}
								>
									{message}
								</div>
							</div>
						)}
						<CheckButton style={{ display: "none" }} ref={checkBtn} />
					</Form>
				</div>
			</div>
		</>
	);
};

export default Login;
