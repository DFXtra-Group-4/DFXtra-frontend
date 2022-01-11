import "./css/CompanyProfile.css"
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import PostData from './company.json';
import React, { Component, useEffect } from 'react';
import Company from "./company.json";


export default function CompanyPage({ allCompanyData }) {

	const { companyName } = useParams();
	console.log(companyName);
	console.log('company data is ...', allCompanyData)
	const filterFunction = () => {
		if (allCompanyData) {
			const filtered = allCompanyData.filter(companyData => companyData.companyName === companyName);
			console.log(filtered);
			return filtered[0];
		}
	}

	useEffect(() => {
		filterFunction();
	}, [allCompanyData]);

	return (
		(filterFunction() &&
			<div id="companyProfile">
				<div className="row">
					<div className="column">

						{ }


						<h2>

							<b>
								<img
									className="logo"
									src={filterFunction().logo}

									alt=""
									height="100px"
									width="100px"

								/>

								<div className="companyHeader">

									<h1>{filterFunction().companyName}</h1>
								</div>
								<div className="compField">
									<i>{filterFunction().field}</i>
								</div>
								<h2>
									<a href={filterFunction().companyWebsite} class="company-Profile">Company website</a>
								</h2>
								<h3>Company size: {filterFunction().companySize}</h3>

								<h3>Salary: {filterFunction().salary}</h3>

								<h3>Location: {filterFunction().vacancies[0].location} </h3>


							</b>
						</h2>


					</div>
				</div>

				{/* <div className="compRow">
						<div className="compColumn"> */}

				<div className="row">
					<div className="column">
						<h2>
							<u>About the company</u>
							<p>{filterFunction().about}</p>

						</h2>
						<div className="roleCards">
							{/* <img className="smallImage" src={filterFunction().logo}></img> */}
						</div>




						{/* copied from vacancies card and adapted */}



					</div>
					{/* <div className="compColumn"> */}
					{/* <div className="column"> */}
					{/* <p>{filterFunction().about}</p> */}

					{/* </div> */}
				</div>
				{/* <div className="compRow">
						<div className="compColumn"> */}
				<div className="row">
					<u>Roles Available: {filterFunction().rolesAvailable}</u>
					<div
						class="compLeft"
						style={{
							padding: "20px",
							width: "17%"
						}}
					>
						<div class="rowComp" style={{ marginBottom: "20px" }}>
							<div style={{ width: "60%" }}>
								<div style={{ textAlign: "right" }}>
									<img
										src={filterFunction().logo}

										alt="programmer"
										height="70px"
										width="70px"
										style={{ marginLeft: "px" }}
									></img>
								</div>
								<h3 style={{ marginTop: "10px" }}>{filterFunction().vacancies[0].jobTitle}</h3>
								{/* <h3 style={{ marginTop: "10px" }}>{filterFunction().companyName}</h3> */}
								<div className="compDesc">
									<i style={{ marginTop: "10px" }}>{filterFunction().vacancies[0].jobDescription}</i>
								</div>
							</div>

						</div>



						<div style={{ marginTop: "20px", width: "100%" }}>
							<p style={{ marginTop: "0px", lineHeight: "16pt" }}>{filterFunction().vacancies[0].location}</p>
						</div>



					</div>


					<div
						class="compRight"
						style={{
							padding: "20px",
							width: "17%"
						}}
					>
						<div class="rowComp" style={{ marginBottom: "20px" }}>
							<div style={{ width: "60%" }}>
								<div style={{ textAlign: "right" }}>
									<img
										src={filterFunction().logo}

										alt="programmer"
										height="70px"
										width="70px"
										style={{ marginLeft: "px" }}
									></img>
								</div>
								<h3 style={{ marginTop: "10px" }}>{filterFunction().vacancies[1].jobTitle}</h3>
								{/* <h3 style={{ marginTop: "10px" }}>{filterFunction().companyName}</h3> */}
								<div className="compDesc">
									<i style={{ marginTop: "10px" }}>{filterFunction().vacancies[1].jobDescription}</i>
								</div>
							</div>

						</div>



						<div style={{ marginTop: "20px", width: "100%" }}>
							<p style={{ marginTop: "0px", lineHeight: "16pt" }}>{filterFunction().vacancies[1].location}</p>
						</div>



					</div>







				</div>


				{/* <div
					class="rowVacancy"
					style={{
						padding: "20px",
						width: "17%"
					}}
				>

					<div class="rowVacancy" style={{ marginBottom: "20px" }}>
						<div style={{ width: "60%" }}>
							<h3 style={{ marginTop: "10px" }}>{filterFunction().vacancies[0].jobTitle}</h3>
							<h3 style={{ marginTop: "10px" }}>{filterFunction().companyName}</h3>
                            <div className="compDesc">
                            <i style={{ marginTop: "10px" }}>{filterFunction().vacancies[1].jobDescription}</i>
                            </div>
						</div>
						<div style={{ textAlign: "right" }}>
							<img
								src={filterFunction().logo}

								alt="programmer"
								height="70px"
								width="70px"
								style={{ marginLeft: "10px" }}
							></img>
						</div>
					</div>

                

					<div style={{ marginTop: "20px", width: "100%" }}>
						<p style={{ marginTop: "0px", lineHeight: "16pt" }}>{Company.companyDetails[1].vacancies[0].location}</p>
					</div>
                    
                    					
					
				
                
                
                </div>                  */}









			</div>
		)
		// </div>
	)


}

