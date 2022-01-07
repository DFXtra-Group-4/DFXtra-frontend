import "./css/editprofile.css";
import "./utils/profile.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditProfile({ profileData, updateData }) {
	let navigate = useNavigate();


	const dataObject = {
		firstName: "",
		lastName: "",
		personalEmail: "",
		workEmail: "",
		gitHub: "",
		linkedIn: "",
		telNo: "",
		gender: "",
		personalityType: "",
		nationality: "",
	};
	const dataObject2 = {
		schoolQualifications: {
			school: "",
			type: "",
			subject: "",
			level: "",
			grade: "",
			year: "",
			weight: "",
			priority: "",
			description: ""
		}

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
	const onSubmit2 = e => {
		e.preventDefault();
		console.log("data sent..", dataObject2);
		updateData(dataObject2);
		navigate(`/trainee/${profileData._id}`, { replace: true });
	};

	useEffect(() => { }, [profileData]);

	const schoolQualificationsTableRows = () => {
		return (
			profileData.personalStory?.schoolQualifications.map(x => (
				<tr>
					<td>
						<p style={{ fontSize: "10pt" }}>{x.school}</p>

					</td>
					<td>

						<p style={{ fontSize: "10pt" }}>{x.examType}</p>
					</td>
					<td>

						<p style={{ fontSize: "10pt" }}>{x.subject}</p>

					</td>
					<td>

						<p style={{ fontSize: "10pt" }}>{x.grade}</p>

					</td>
					<td>

						<p style={{ fontSize: "10pt" }}>{x.year}</p>

					</td>
					<td>

						<p style={{ fontSize: "10pt" }}>{x.weight}</p>

					</td>
					<td>

						<p style={{ fontSize: "10pt" }}>{x.priority}</p>

					</td>
					<td>

						<p style={{ fontSize: "10pt" }}>{x.description}</p>

					</td>
					<td><button style={{ width: "54px" }}>Delete</button></td>
				</tr>)
			));
	}

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
							<option value="male" >
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
				<div>
					<img src="images/blank-profile-picture-973460_640.png" alt="profilepic" height="70px" width="70px"></img>
					<button>Upload picture</button></div>
			</div>
		);
	};

	return (
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
											name="university"
											id="university"
											placeholder="University name"
											style={{ width: "120px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Subject"
											name="subject"
											id="subject"
											style={{ width: "120px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											name="level"
											id="level"
											placeholder="Level"
											style={{ width: "100px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											name="grade"
											id="grade"
											placeholder="Grade"
											style={{ width: "70px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="date"
											name="from"
											id="from"
											placeholder="From"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="date"
											name="to"
											id="to"
											placeholder="To"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											name="weight"
											id="weight"
											placeholder="Weight"
											style={{ width: "90px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											id="priority"
											name="priority"
											placeholder="Priority"
											style={{ width: "90px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											name="description"
											id="description"
											placeholder="Description"
											style={{ width: "137px" }}
											onChange={onChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<p className="ggText">
						<u>School qualifications</u>
					</p>
					<form onSubmit={onSubmit2} className="myForm">
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
									<th style={{ backgroundColor: "#061450", color: "#fff" }}>

									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input
											type="text"
											placeholder="School name"
											name="name"
											id="id"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Exam type"
											name="type"
											id="type"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											name="subject"
											id="subject"
											placeholder="Subject"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Grade"
											name="grade"
											id="grade"
											style={{ width: "108px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Year"
											name="year"
											id="year"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>

									<td>
										<input
											type="text"
											placeholder="Weight"
											name="weight"
											id="weight"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Priority"
											name="priority"
											id="priority"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Description"
											name="description"
											id="description"
											style={{ width: "129px" }}
											onChange={onChange}
										></input>
									</td>
									<td><button type="submit" style={{ width: "54px" }}>Add</button></td>
								</tr>
								{schoolQualificationsTableRows()}

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
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Company name"
											style={{ width: "130px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Position"
											style={{ width: "128px" }}
											onChange={onChange}
										></input>
									</td>

									<td>
										<input
											type="date"
											placeholder="From"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="date"
											placeholder="To"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Weight"
											style={{ width: "120px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Priority"
											style={{ width: "120px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Description"
											style={{ width: "121px" }}
											onChange={onChange}
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
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Issuer"
											style={{ width: "130px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Award"
											style={{ width: "128px" }}
											onChange={onChange}
										></input>
									</td>

									<td>
										<input
											type="text"
											placeholder="Grade"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Year"
											style={{ width: "110px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Weight"
											style={{ width: "120px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Priority"
											style={{ width: "120px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Description"
											style={{ width: "121px" }}
											onChange={onChange}
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
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="URL"
											style={{ width: "200px" }}
											onChange={onChange}
										></input>
									</td>

									<td>
										<input
											type="text"
											placeholder="Year"
											style={{ width: "125px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Weight"
											style={{ width: "125px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Priority"
											style={{ width: "125px" }}
											onChange={onChange}
										></input>
									</td>
									<td>
										<input
											type="text"
											placeholder="Description"
											style={{ width: "221px" }}
											onChange={onChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
			</div>
		</form>
	);
}
export default EditProfile;
