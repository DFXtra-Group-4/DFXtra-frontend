import "./css/Navbar.css";
import { useEffect } from "react";
const Navbar = ({ logout, data, loading }) => {
	console.log(logout);

	const setNone = () => {
		const nav = document.querySelector("#nav");
		//nav.style.visibility = "hidden";
		console.log(nav);
		//
		// document.querySelector("#nav").style.visibility = "hidden";
		//nav = true;
		// return true;
	};

	// useEffect(() => {
	// 	setNone();
	// }, []);

	return (
		<>
			{logout && setNone()}
			{!loading && (
				<div id="nav">
					<p className="DFX" style={{ color: "#fff" }}>
						{/* {`DFX Logged in as ${data.personalDetails.contact.email.workEmail}`} */}
					</p>
					<ul>
						<div className="dropdown">
							<button className="dropbtn">
								Menu
								<i className="fa fa-caret-down"></i>
							</button>
							<div className="dropdown-content">
								<a href="/vacancies">Job board</a>
								<a href="/landing">Industry partners</a>
							</div>
						</div>
						<div className="dropdown">
							<button className="dropbtn">
								Account
								<i className="fa fa-caret-down"></i>
							</button>
							<div className="dropdown-content">
								<a href={`/trainee/${data._id}`}>My profile</a>
								<a href={`/trainee/${data._id}/edit`}>Edit profile</a>
								<a href="/">Log out</a>
							</div>
						</div>
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
