import "./css/registration.css";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";

// import AuthService from "../services/auth.service";
// import ValidationServiceHelpers from "../services/validation.serviceHelpers";

const Login = ({ setLogin }) => {
	const form = useRef();
	const checkBtn = useRef();

	// const [Email, setEmail] = useState(``);
	// const [password, setPassword] = useState(``);
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

	const handleLogin = async e => {
		e.preventDefault();
		const res = await axios.post(`http://127.0.0.1:4000/login`, user);
		console.log(res.data);
		setLoading(res.data.user ? true : false);
		setLogin(res.data.user);
		setMessage(res.data.message);
		navigate("/");
		// form.current.validateAll();

		// if (checkBtn.current.context._errors.length === 0) {
		// 	const login = await AuthService.login(Email, password);
		// 	if (localStorage.getItem("user")) {
		// 		navigate(`/profile`);
		// 		// window.location.reload();
		// 	} else {
		// 		console.dir(login);
		// 		setMessage(login.error);
		// 		setLoading(false);
		// 	}
		// } else {
		// 	setLoading(false);
		// }
	};

	return (
		<div className="col-md-12">
			<div className="card card-container">
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
							// value={user.email}
							onChange={onChangeEmail}
							// validations={[ValidationServiceHelpers.required]}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<Input
							type="password"
							className="form-control"
							name="password"
							// value={user.password}
							onChange={onChangePassword}
							// validations={[ValidationServiceHelpers.required]}
						/>
					</div>
					<div className="form-group">
						<button
							className="btn btn-primary btn-block"
							disabled={loading}
							type="submit"
						>
							{loading && <span className="spinner-border spinner-border-sm"></span>}
							<span>Login</span>
						</button>
					</div>

					{message && (
						<div className="form-group">
							<div className="alert alert-danger" role="alert">
								{message}
							</div>
						</div>
					)}
					<CheckButton style={{ display: "none" }} ref={checkBtn} />
				</Form>
			</div>
		</div>
	);
};

export default Login;
