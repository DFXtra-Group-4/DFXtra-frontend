import "./css/CompanyProfile.css"
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import PostData from './company.json';
import React, {Component} from 'react';
import Company from "./company.json";


export default function companyPage({companyDetails}) {

    return (
        
    <div id="companyProfile">
        <div className="row">
            <div className="column">
     
                {}
               

                <h2>
                    
                    <b>
                    <img
						className="logo"
						src={Company.companyDetails[0].logo}
                        
						alt=""
						height="100px"
						width="100px"
                        
					/>

                        <div className="companyHeader">
                       
                       <h1>{Company.companyDetails[0].companyName}</h1>
                       </div>
                       <div className="compField">
                       <i>{Company.companyDetails[0].field}</i>
                       </div>
                       <h2>
                        <a href= {Company.companyDetails[0].companyWebsite} class="company-Profile">Company website</a> 
                        </h2>
                        <h3>Company size: {Company.companyDetails[0].companySize}</h3>

                        <h3>Salary: {Company.companyDetails[0].salary}</h3>
                                
                                <h3>Location: {Company.companyDetails[0].vacancies[0].location} </h3>

                        
                    </b>
                </h2>
            

            </div>
        </div>

       
        
                        <div className="row">
						<div className="column">
							<h2>
								<u>About the company</u>
                                <p>{Company.companyDetails[0].about}</p>
                                
							</h2>
							<div className="roleCards">
                           
                            </div>

						</div>
						
                        </div>
                        
                        <div className="row3">
                        <u>Roles Available: {Company.companyDetails[0].rolesAvailable}</u>


                        
						<div className="column3">
							
                            
								

                   
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
								src={Company.companyDetails[0].logo}

								alt="programmer"
								height="70px"
								width="70px"
								style={{ marginLeft: "px" }}
							></img>
						</div>
							<h3 style={{ marginTop: "10px" }}>{Company.companyDetails[0].vacancies[0].jobTitle}</h3>
							{/* <h3 style={{ marginTop: "10px" }}>{Company.companyDetails[0].companyName}</h3> */}
                            <div className="compDesc">
                            <i style={{ marginTop: "10px" }}>{Company.companyDetails[0].vacancies[0].jobDescription}</i>
                            </div>
						</div>
						
					</div>

                

					<div style={{ marginTop: "20px", width: "100%" }}>
						<p style={{ marginTop: "0px", lineHeight: "16pt" }}>{Company.companyDetails[0].vacancies[0].location}</p>
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
								src={Company.companyDetails[0].logo}

								alt="programmer"
								height="70px"
								width="70px"
								style={{ marginLeft: "px" }}
							></img>
						</div>
							<h3 style={{ marginTop: "10px" }}>{Company.companyDetails[0].vacancies[1].jobTitle}</h3>
							{/* <h3 style={{ marginTop: "10px" }}>{Company.companyDetails[0].companyName}</h3> */}
                            <div className="compDesc">
                            <i style={{ marginTop: "10px" }}>{Company.companyDetails[0].vacancies[1].jobDescription}</i>
                            </div>
						</div>
						
					</div>

                

					<div style={{ marginTop: "20px", width: "100%" }}>
						<p style={{ marginTop: "0px", lineHeight: "16pt" }}>{Company.companyDetails[0].vacancies[1].location}</p>
					</div>
                    
                    					
					
				</div>

                </div>

                </div>
                
    
    </div>
    
    )

    
}

