import "./css/CompanyProfile.css"
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import PostData from './company.json';
import React, {Component} from 'react';
import Company from "./company.json";


export default function companyPage({companyDetails}) {




// const CompanyProfile = ({data}, { loading}) => {
//     const {_id }  = useParams();
    return (
        
    <div id="companyProfile">
        <div className="row">
            <div className="column">
            
                


                {}
               

                <h2>
                    {/* <i>Company Profile</i> */}
                    <b>
                    <img
						className="logo"
						src={Company.companyDetails[0].logo}
                        // "
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

        {/* <div className="compRow">
						<div className="compColumn"> */}
        
                        <div className="row">
						<div className="column">
							<h2>
								<u>About the company</u>
                                <p>{Company.companyDetails[0].about}</p>
                                
							</h2>
							<div className="roleCards">
                            {/* <img className="smallImage" src={Company.companyDetails[0].logo}></img> */}
                            </div>




    {/* copied from vacancies card and adapted */}
                           
			






						</div>
						{/* <div className="compColumn"> */}
                        <div className="column">
							{/* <p>{Company.companyDetails[0].about}</p> */}
                           
						</div>
                        </div>
                        {/* <div className="compRow">
						<div className="compColumn"> */}
                        <div className="row">
						<div className="column">
							<h2>
                            
								<u>Roles Available: {Company.companyDetails[0].rolesAvailable}</u>

                                <div
					class="columnVacan"
					style={{
						padding: "20px",
						width: "17%"
					}}
				>
					<div class="rowVacancy" style={{ marginBottom: "20px" }}>
						<div style={{ width: "60%" }}>
							<h3 style={{ marginTop: "10px" }}>{Company.companyDetails[0].vacancies[0].jobTitle}</h3>
							<h3 style={{ marginTop: "10px" }}>{Company.companyDetails[0].companyName}</h3>
                            <div className="compDesc">
                            <i style={{ marginTop: "10px" }}>{Company.companyDetails[0].vacancies[0].jobDescription}</i>
                            </div>
						</div>
						<div style={{ textAlign: "right" }}>
							<img
								src={Company.companyDetails[0].logo}

								alt="programmer"
								height="70px"
								width="70px"
								style={{ marginLeft: "10px" }}
							></img>
						</div>
					</div>
					<div style={{ marginTop: "20px", width: "100%" }}>
						<p style={{ marginTop: "0px", lineHeight: "16pt" }}>{Company.companyDetails[0].vacancies[0].location}</p>
					</div>
					
					
				</div>

                            
                        
							</h2>

                       
							
					</div>

                    
    
    </div>
    </div>
    )
}
// }
// export default CompanyProfile;
