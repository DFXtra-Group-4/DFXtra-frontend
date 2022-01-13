import "./css/CompanyProfile.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import PostData from "./company.json";
import React, { Component, useEffect } from "react";
import Company from "./company.json";

export default function CompanyPage({ allCompanyData, navigateTo }) {
	const { companyName } = useParams();
	console.log(companyName);

	const filterFunction = () => {
		if (Object.keys(allCompanyData).length > 0) {
			console.log("allcompany data..", allCompanyData);
			const filtered = allCompanyData.filter(companyData => {
				return companyData.companyName === companyName;
			});
			console.log("filtered is...", filtered);
			return filtered[0];
		} else {
			return [];
		}
	};

	useEffect(() => {}, [allCompanyData]);

	return (
		<>
			{!localStorage.getItem("user") && navigateTo("/")}
			{filterFunction().length === 0 || typeof filterFunction() === undefined ? (
				<h2>Loading</h2>
			) : (
				<div id="companyProfile">
					<div className="row">
						{}

						<h2>
							<b>
								<img
									className="logo"
									src={filterFunction().logo}
									alt=""
									height="70px"
									width="70px"
								/>

								<div className="companyHeader">
									<h1>{filterFunction().companyName}</h1>
								</div>
								<div className="compField">
									<i>{filterFunction().field}</i>
								</div>
								<h2>
									<a
										href={filterFunction().companyWebsite}
										class="company-Profile"
										style={{ marginLeft: "20px" }}
									>
										Company website
									</a>
								</h2>
								<h3
									style={{
										marginLeft: "20px",
										left: "20px",
										position: "relative",
										top: "-15px"
									}}
								>
									<u>Company size:</u> {filterFunction().companySize}
								</h3>

								<h3
									style={{
										marginLeft: "20px",
										left: "20px",
										position: "relative",
										top: "-11px"
									}}
								>
									<u>Salary:</u> {filterFunction().salary}
								</h3>

								<h3
									style={{
										marginLeft: "20px",
										left: "20px",
										position: "relative",
										top: "-10px"
									}}
								>
									<u>Location:</u> {filterFunction().vacancies[0].location}{" "}
								</h3>
							</b>
						</h2>
					</div>

					<div className="row">
						<div className="companycolumn">
							<h2>
								<u>About the company</u>
								<p>{filterFunction().about}</p>
							</h2>
							<div className="roleCards"></div>
						</div>
					</div>

					<div className="row" style={{ height: "350px" }}>
						<h3
							style={{
								textAlign: "center",

								position: "absolute",
								display: "block",
								top: "1.5rem",
								left: "1.5rem"
							}}
						>
							<u>
								<b>Roles Available: 2</b>
							</u>
						</h3>

						<div
							class="compLeft"
							style={{
								padding: "20px",
								width: "17%",
								position: "relative",

								marginRight: "21px"
							}}
						>
							<div style={{ marginBottom: "20px" }}>
								<div style={{ textAlign: "left" }}>
									<img
										src={filterFunction().logo}
										alt="programmer"
										height="70px"
										width="70px"
									></img>
								</div>
								<h3 style={{ marginTop: "10px", marginBottom: "10px" }}>
									{filterFunction().vacancies[0].jobTitle}
								</h3>

								<div className="compDesc">
									<p style={{ marginTop: "10px" }}>
										{filterFunction().vacancies[0].jobDescription}
									</p>
								</div>
							</div>

							<div
								style={{
									marginTop: "20px",
									position: "absolute",
									bottom: "0",
									marginBottom: "10px"
								}}
							>
								<p style={{ marginTop: "0px", lineHeight: "16pt" }}>
									{filterFunction().vacancies[0].location}
								</p>
							</div>
						</div>

						<div
							class="compRight"
							style={{
								padding: "20px",
								width: "17%",
								position: "relative"
							}}
						>
							<div class="rowComp" style={{ marginBottom: "20px" }}>
								<div style={{ textAlign: "left" }}>
									<img
										src={filterFunction().logo}
										alt="programmer"
										height="70px"
										width="70px"
										style={{ marginLeft: "0px" }}
									></img>
								</div>
								<h3 style={{ marginTop: "10px", marginBottom: "10px" }}>
									{filterFunction().vacancies[1].jobTitle}
								</h3>

								<div className="compDesc">
									<p style={{ marginTop: "10px" }}>
										{filterFunction().vacancies[1].jobDescription}
									</p>
								</div>
							</div>

							<div
								style={{
									marginTop: "20px",
									position: "absolute",
									bottom: "0",
									marginBottom: "10px"
								}}
							>
								<p style={{ marginTop: "0px", lineHeight: "16pt" }}>
									{filterFunction().vacancies[1].location}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
