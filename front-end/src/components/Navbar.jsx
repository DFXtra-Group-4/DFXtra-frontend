import "./css/Navbar.css";

const Navbar = ({ data }, { loading }) => {
	return (
		<>
			{!loading && (
				<div id="nav">
					<p className="DFX" style={{ color: "#fff" }}>
						DFX
					</p>
					<ul>
						<div className="dropdown">
							<button className="dropbtn">
								Menu
								<i className="fa fa-caret-down"></i>
							</button>
							<div className="dropdown-content">
								<a href="/vacancies">Job board</a>
								<a href="/">Industry partners</a>
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
								{/* <a href="/">Log out</a> */}
							</div>
						</div>
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
