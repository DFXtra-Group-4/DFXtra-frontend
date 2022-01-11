import React, { useState } from "react";
import "./css/ScoreCard.css";

export default function ScoreCard({ setIsOpen, profileData, navigateTo }) {
	const handleClose = e => {
		console.log(e.target);
		setIsOpen(false);
		e.target.parentNode.style.display = "none";
		const title = document.querySelector(".title");
		title.style.opacity = "100%";
		const spotlightInfo = document.querySelector(".spotlightInfo");
		spotlightInfo.style.opacity = "100%";
		const container = document.querySelector(".container");
		container.style.opacity = "100%";
	};

	return (
		<>
			{!localStorage.getItem("user") && navigateTo("/")}
			<div className="scoreCard">
				<button class="closeScore" onClick={handleClose}>
					x
				</button>
				<div className="headTitle">
					<h1>Scorecard</h1>
				</div>
				<img
					className="cardImg"
					src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
					alt=""
					height="100px"
					width="100px"
				/>
				<div className="fullnameHead">
					<h1>
						{" "}
						{`${profileData.personalDetails.name.firstName}` +
							" " +
							`${profileData.personalDetails.name.lastName}`}{" "}
					</h1>
				</div>
				<div className="ptags">
					<p>{profileData.personalDetails.profileHeadline}</p>
				</div>
				<div className="box1">
					<h2>Course Details:</h2>
					<table>
						<tr>
							<th>Cohort:</th>
							<td>{profileData.yourTraining.cohort}</td>
						</tr>
						<tr>
							<th>Trainer:</th>
							<td>{profileData.yourTraining.trainer}</td>
						</tr>
						<tr>
							<th>Training Finish Date:</th>
							<td>{profileData.yourTraining.trainingFinishDate}</td>
						</tr>
					</table>
				</div>
				<div className="box2">
					<h2>Modules:</h2>
					<table>
						<tr>
							<th>Module Name:</th>
							<td>{profileData.yourTraining.modules[0].moduleName}</td>
						</tr>

						<tr>
							<th>Result:</th>
							<td>{profileData.yourTraining.modules[0].passStatus.pass}</td>
						</tr>
					</table>
				</div>
				<div className="box3">
					<h2>Scores:</h2>
					<table>
						<tr>
							<th>Score Name:</th>
							<td>{profileData.yourInfo.scores[0].scoreName}</td>
						</tr>

						<tr>
							<th>Score:</th>
							<td>{profileData.yourInfo.scores[0].score}</td>
						</tr>
					</table>
				</div>
			</div>
		</>
	);
}
