import "./css/profile.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import javaImg from "../images/javaBadge.jpg"
import pythonImg from "../images/python.jpg"

const Profile = ({ data, navigateTo }) => {
	console.log('profiledata', data);
	return (
		<>
			{
				!(localStorage.getItem('user')) && navigateTo('/')
			}
			{!(data) ? (
				<h2> Data is loading...</h2>
			) : (
				<div id="profile">
					<div className="row">
						<div className="column">
							<h2>
								<b>
									<u>
										<i>Your profile</i>
									</u>
								</b>
							</h2>
							<NavLink to={`/trainee/${data._id}/edit`}>Edit Profile</NavLink>
							<table>
								<tr>
									<span className="gText">
										<b>Name:</b>
									</span>
									<td className="gName">
										{data.personalDetails?.name.firstName +
											" " +
											data.personalDetails?.name.lastName}
									</td>
								</tr>
								<tr>
									<span className="gText">Personal email:</span>
									<td className="gName">
										{data.personalDetails?.contact.email.email}
									</td>
								</tr>
								<tr>
									<span className="gText">Digital futures email:</span>
									<td className="gName">
										{data.personalDetails?.contact.email.workEmail}
									</td>
								</tr>
								<tr>
									<span className="gText">Github:</span>
									<td className="gName">{data.personalDetails?.gitHub}</td>
								</tr>
								<tr>
									<span className="gText">Linked in:</span>
									<td className="gName">{data.personalDetails?.linkedIn}</td>
								</tr>
								<tr>
									<span className="gText">Phone:</span>
									<td className="gName">{data.personalDetails?.contact.telNo}</td>
								</tr>
							</table>
						</div>
						<div className="column">
							<div className="column1">
								<span className="gText">
									<u>Personal story summary</u>
								</span>

								<p>
									Degree in {data.personalStory?.degree.subject} from{" "}
									{data.personalStory?.degree.university}
								</p>
								<p>
									{data.personalStory?.schoolQualifications.length} school
									qualifications
								</p>
								<p>{data.personalDetails?.profileHeadlines}</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<h2>
								<u>Your training</u>
							</h2>
							<table>
								<tr>
									<span className="gText">Cohort:</span>
									<td>{data.yourTraining?.cohort}</td>
								</tr>
								<tr>
									<span className="gText">Learning path:</span>
									<td>{data.yourTraining?.trainingPath}</td>
								</tr>
								<tr>
									<span className="gText">Trainer:</span>
									<td>{data.yourTraining?.trainer}</td>
								</tr>
								<tr>
									<span className="gText">Trainer finish date:</span>
									<td>14/1/22</td>
								</tr>
							</table>
						</div>
						<div className="column">
							<div className="column1">
								<span className="gText">
									<u>Results</u>
								</span>
								<p></p>
								<p>
									{data.yourTraining?.modules[0].moduleName} :{" "}
									{data.yourTraining?.modules[0].passStatus.pass}
								</p>
								<p>
									{data.yourTraining?.modules[1].moduleName} :{" "}
									{data.yourTraining?.modules[1].passStatus.pending}
								</p>
							</div>
						</div>
					</div>
					<div class="row">
						<h2>
							<u>Your information</u>
						</h2>
						<div class="column" >
							<span className="gText" >
								<u>Badges</u>
							</span>
							<div class="column2">
								{(data) && data.yourTraining?.cohort === 'Software Engineering-1' &&

									<div className="badges" style={{ marginLeft: "0px", padding: "20px", marginBottom: "10px" }}>

										<img id="java"
											src={javaImg}
											alt="programmer"
											height="70px"
											width="70px"
											style={{ marginBottom: "0px" }}
										/>


										<p style={{
											color: "#303030",
											fontWeight: " 600"


										}}><u>Oracle Certified Associate</u></p>
										<p>Java SE 8 Programmer</p>
									</div>
								}
								{(data) &&
									data.yourTraining?.cohort === 'Data Science-1' &&
									<div className="badges" style={{ marginLeft: "0px", padding: "20px", marginBottom: "10px" }}>

										<img id="python"
											src={pythonImg}
											alt="programmer"
											height="70px"
											width="70px"
											style={{ marginBottom: "0px" }}
										/>


										<p style={{
											color: "#303030",
											fontWeight: " 600"
										}}><u>Certified Associate in Python Programming</u></p>
										<p>Accredited Python Programmer</p>
									</div>
								}
							</div>
						</div>

						<div className="column" style={{ marginTop: "20px", height: "300px" }}>
							<div className="column1">
								<div className="score">
									<span className="gText">
										<u>Scores</u>
									</span>
									<p>
										{data.yourInfo?.scores[0].scoreName} :{" "}
										{data.yourInfo?.scores[0].score}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default Profile;
