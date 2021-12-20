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
									<td className="gName">{data.personalDetails?.github}</td>
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
								<h2>
									<b>
										<u>
											<i>Personal story summary</i>
										</u>
									</b>
								</h2>
								<p>Degree in XXX from YYY</p>
								<p>4 school qualifications</p>
								<p>5 work experiences</p>
								<p>3 personal achievements</p>
								<p>etc</p>
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
									<td>XXXXXXXXX</td>
								</tr>
								<tr>
									<span className="gText">Learning path:</span>
									<td>XXXXXXXXXX</td>
								</tr>
								<tr>
									<span className="gText">Trainer:</span>
									<td>XXXXXX</td>
								</tr>
								<tr>
									<span className="gText">Trainer finish date:</span>
									<td>XXXXXXX</td>
								</tr>
							</table>
						</div>
						<div className="column">
							<div className="column1">
								<h2>
									<u>Results</u>
								</h2>
								<p>Module 1 Challenge A PASSED</p>
								<p>Module 1 Challenge B PASSED</p>
								<p>Module 2 Challenge C TODO</p>
								<p>etc</p>
							</div>
						</div>
					</div>
					<div class="row">
						<h2>
							<u>Your information</u>
						</h2>
						<div class="column">
							<span className="gText">
								<u>Badges</u>
							</span>
							<div class="column2">
								<div className="badges">
									<p>Badge A</p>
									<p>XXXX XX XX</p>
								</div>
								<div className="badges">
									<p>Badge A</p>
									<p>XXXX XX XX</p>
								</div>

								<div className="badges">
									<p>Badge A</p>
									<p>XXXX XX XX</p>
								</div>
								<div className="badges">
									<p>Badge A</p>
									<p>XXXX XX XX</p>
								</div>
							</div>
						</div>

						<div className="column">
							<div className="score">
								<p className="bold">
									<u>Scores</u>
								</p>
								<textarea className="area" cols="60" rows="8"></textarea>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default Profile;
