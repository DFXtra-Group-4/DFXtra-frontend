import "./css/profile.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Profile = ({ data }, { loading }) => {
	const { _id } = useParams();
	return (
		<>
			{loading ? (
				<h2> Data is loading...</h2>
			) : (
				<div id="profile">
					<div className="personalstoryrow">
						<div className="column">
							<h2 style={{ marginLeft: "0" }}>
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
							<div className="personalstorycolumn1">
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
								<p>{data.personalDetails?.profileHeadline}</p>

							</div>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<h2 style={{ marginLeft: "0" }}>
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
					<div class="informationrow" >
						<h2 style={{ marginLeft: "0" }}>
							<u>Your information</u>
						</h2>
						<div class="column" >
							<span className="gText" >
								<u>Badges</u>
							</span>
							<div class="column2">
								<div className="badges" style={{ marginLeft: "0px", padding: "20px", marginBottom: "10px" }}>

									<img
										src="../images/40752.jpg"
										alt="programmer"
										height="70px"
										width="70px"
										style={{ marginBottom: "0px" }}
									/>


									<p style={{
										color: "#303030",
										fontWeight: " 600"


									}}><u>Programming</u></p>
									<p>Java, javascript, html, css, react, node js.</p>
								</div>
								<div className="badges" style={{ padding: "20px", marginBottom: "10px", marginLeft: "0" }}>
									<img
										src="../images/40752.jpg"
										alt="programmer"
										height="70px"
										width="70px"
										style={{ marginBottom: "0px" }}
									/>
									<p style={{
										color: "#303030",
										fontWeight: " 600"


									}}><u>Databases</u></p>
									<p>Mongo, mySQL, SQL server, MS access.</p>
								</div>

								<div className="badges" style={{ marginLeft: "0px", padding: "20px", marginTop: "0px" }}>
									<img
										src="../images/40752.jpg"
										alt="programmer"
										height="70px"
										width="70px"
										style={{ marginBottom: "0px" }}
									/>
									<p style={{
										color: "#303030",
										fontWeight: " 600"


									}}><u>Computer networks</u></p>
									<p>TCP/IP, riverbed, email server, web server.</p>
								</div>
								<div className="badges" style={{ padding: "20px", marginTop: "0px", marginLeft: "0" }}>
									<img
										src="../images/40752.jpg"
										alt="programmer"
										height="70px"
										width="70px"
										style={{ marginBottom: "0px" }}
									/>
									<p style={{
										color: "#303030",
										fontWeight: " 600"


									}}><u>Media</u></p>
									<p>Flash, python,microsoft expression web.</p>
								</div>
							</div>
						</div>

						<div className="column" style={{ marginTop: "20px", height: "300px" }}>
							<div className="informationcolumn1" >
								<div className="score" >
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
			)
			}
		</>
	);
};
export default Profile;
