import "./css/editprofile.css";
import "./utils/profile.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile({ profileData, updateData, navigateTo, logout }) {
	let navigate = useNavigate();
	// const [data, setData] = useState({});
	// console.log('data is ...', profileData);

	const dataObject = {
		firstName: "",
		lastName: "",
		personalEmail: "",
		workEmail: "",
		gitHub: "",
		linkedIn: "",
		telNo: ""
		// gender: "",
		// personalityType: "",
		// nationality: ""
	};

	const onChange = e => {
		console.log(e.target);
		dataObject[e.target.name] = e.target.value;
		console.log(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		console.log("data sent..", dataObject);
		updateData(dataObject);
		navigate(`/trainee/${profileData._id}`, { replace: true });
	};

	useEffect(() => { }, [profileData]);

	const yourProfile = () => {
		return (
			<div className="editRow">
				<h2>
					<h3>Your profile</h3>
				</h2>
				<h2>Profile completion</h2>
				<div id="myProgress">
					<div id="myBar"></div>
				</div>

				<button className="saveBtn" type="submit">
					Save profile
				</button>
			</div>
		);
	};

	const personalInformation = () => {
		return (
			<div className="personalInformationDiv">
				<div className="personalInfoH3">
					<h2> Personal information </h2>
				</div>
				<div id="personalInfoInputs">
					<span className="profileLabelSpan">
						<label className="ggText">First Name:</label>
						<input
							type="text"
							placeholder="Your name"
							name="firstName"
							onChange={onChange}
						></input>
					</span>
					<span className="profileLabelSpan">
						<label className="ggText">Last Name:</label>
						<input
							type="text"
							placeholder="Your name"
							name="lastName"
							onChange={onChange}
						></input>
					</span>
					<span className="profileLabelSpan">
						<label className="ggText">Personal Email:</label>
						<input
							type="email"
							placeholder="Your personal email"
							name="personalEmail"
							onChange={onChange}
						></input>
					</span>
					<span className="profileLabelSpan">
						<label className="ggText">Digital Futures Email:</label>
						<input
							type="text"
							placeholder="Your name"
							name="workEmail"
							onChange={onChange}
						></input>
					</span>
					<span className="profileLabelSpan">
						<label className="ggText">Github</label>
						<input
							type="text"
							placeholder="Your github link"
							name="gitHub"
							onChange={onChange}
						></input>
					</span>
					<span className="profileLabelSpan">
						<label className="ggText">LinkedIn</label>
						<input
							type="text"
							placeholder="Your linked in"
							name="linkedIn"
							onChange={onChange}
						></input>
					</span>
					<span className="profileLabelSpan">
						<label className="ggText">Telephone Number:</label>
						<input
							type="number"
							placeholder="Your phone number"
							name="telNo"
							onChange={onChange}
						></input>
					</span>
				</div>
				<div id="selectDiv">
					<span className="selectSpan">
						<select
							style={{ width: "208px" }}
							name="gender"
							onChange={onChange}
							id="gender"
						>
							<option value="" disabled selected>
								Gender
							</option>
							<option value="male" n>
								Male
							</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</span>
					<span className="selectSpan">
						<select
							style={{ width: "208px" }}
							name="nationality"
							onChange={onChange}
							id="nationality"
						>
							<option value="" disabled selected>
								Nationality
							</option>
							<option value="white">White</option>
							<option value="black">Black</option>
							<option value="asian">Asian</option>

							<option value="mixed">Mixed</option>
						</select>
					</span>
					<span className="selectSpan">
						<select
							name="personality"
							id="personality"
							onChange={onChange}
							style={{ width: "208px" }}
						>
							<option value="" disabled selected>
								Personality
							</option>
							<option value="introverted">Introverted</option>
							<option value="extroverted">Extroverted</option>

							<option value="other">Other</option>
						</select>
					</span>
				</div>
				{/* <img id="selfieUpload"></img>  /*USER STORY LOWER PRIORITY*/}
			</div>
		);
	};

	return (
		<>
			{logout && navigateTo('/')}
			<form onSubmit={onSubmit} className="myForm">
				{yourProfile()}
				{personalInformation()}
				<div>
					<div className="personalStory">
						<h2>
							<u>Personal story</u>
						</h2>
						<p className="ggText">
							<u>Degrees</u>
						</p>
						<form>
							<table style={{ border: "1px solid black" }}>
								<thead>
									<tr>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											University
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Subject
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Level
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Grade
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											From
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											To
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Weight
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Priority
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Description
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<input
												type="text"
												placeholder="University name"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Subject"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Level"
												style={{ width: "100px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Grade"
												style={{ width: "70px" }}
											></input>
										</td>
										<td>
											<input
												type="date"
												placeholder="From"
												style={{ width: "110px" }}
											></input>
										</td>
										<td>
											<input
												type="date"
												placeholder="To"
												style={{ width: "110px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Weight"
												style={{ width: "90px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Priority"
												style={{ width: "90px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Description"
												style={{ width: "137px" }}
											></input>
										</td>
									</tr>
								</tbody>
							</table>
						</form>
						<p className="ggText">
							<u>School qualifications</u>
						</p>
						<form>
							<table style={{ border: "1px solid black" }}>
								<thead>
									<tr>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											School
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Exam type
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Subject
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Grade
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Year
										</th>

										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Weight
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Priority
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Description
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<input
												type="text"
												placeholder="School name"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Exam type"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Subject"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Grade"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Year"
												style={{ width: "120px" }}
											></input>
										</td>

										<td>
											<input
												type="text"
												placeholder="Weight"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Priority"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Description"
												style={{ width: "121px" }}
											></input>
										</td>
									</tr>
								</tbody>
							</table>
						</form>

						<p className="ggText">
							<u>Work experience</u>
						</p>
						<form>
							<table style={{ border: "1px solid black" }}>
								<thead>
									<tr>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Type{" "}
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Company name
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Position
										</th>

										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											From
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											To
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Weight
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Priority
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Description
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<input
												type="text"
												placeholder="Type"
												style={{ width: "130px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Company name"
												style={{ width: "130px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Position"
												style={{ width: "128px" }}
											></input>
										</td>

										<td>
											<input
												type="date"
												placeholder="From"
												style={{ width: "110px" }}
											></input>
										</td>
										<td>
											<input
												type="date"
												placeholder="To"
												style={{ width: "110px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Weight"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Priority"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Description"
												style={{ width: "121px" }}
											></input>
										</td>
									</tr>
								</tbody>
							</table>
						</form>
						<p className="ggText">
							<u>Certificates and awards</u>
						</p>
						<form>
							<table style={{ border: "1px solid black" }}>
								<thead>
									<tr>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Type{" "}
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Issuer
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Award
										</th>

										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Grade
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Year
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Weight
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Priority
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Description
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<input
												type="text"
												placeholder="Type"
												style={{ width: "124px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Issuer"
												style={{ width: "130px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Award"
												style={{ width: "128px" }}
											></input>
										</td>

										<td>
											<input
												type="text"
												placeholder="Grade"
												style={{ width: "110px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Year"
												style={{ width: "110px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Weight"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Priority"
												style={{ width: "120px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Description"
												style={{ width: "121px" }}
											></input>
										</td>
									</tr>
								</tbody>
							</table>
						</form>
						<p className="ggText">
							<u>Portfolio</u>
						</p>
						<form>
							<table style={{ border: "1px solid black" }}>
								<thead>
									<tr>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Title{" "}
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											URL
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Year
										</th>

										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Weight
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Priority
										</th>
										<th style={{ backgroundColor: "#061450", color: "#fff" }}>
											Description
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<input
												type="text"
												placeholder="Title"
												style={{ width: "207px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="URL"
												style={{ width: "200px" }}
											></input>
										</td>

										<td>
											<input
												type="text"
												placeholder="Year"
												style={{ width: "125px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Weight"
												style={{ width: "125px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Priority"
												style={{ width: "125px" }}
											></input>
										</td>
										<td>
											<input
												type="text"
												placeholder="Description"
												style={{ width: "221px" }}
											></input>
										</td>
									</tr>
								</tbody>
							</table>
						</form>
					</div>
				</div>
			</form>
		</>
	);
}
export default EditProfile;
