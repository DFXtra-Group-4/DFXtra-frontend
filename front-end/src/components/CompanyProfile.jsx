import "./css/CompanyProfile.css"
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import PostData from './company.json';
import React, {Component} from 'react';
import Company from "./company.json";
// import companyDetails from './company.json';
// import companyObj from "./companyObj";

export default function companyPage({companyDetails}) {




// const CompanyProfile = ({data}, { loading}) => {
//     const {_id }  = useParams();
    return (
        
    <div id="companyProfile">
        <div className="row">
            <div className="column">
            {/* <div className="compRow">
            <div className="compColumn"> */}
                {/* <b>Company Name</b> */}
                {/* {Company.map((companyObj, index)=>{
                    return <b>{companyObj.companyProfile?.companyName}</b>
                })} */}
                {/* {Company.map(companyDetails => (
                    <li key={companyDetails.id}>{companyDetails.companyName}</li>
                ))} */}

                {/* <td className="gName">
                {data.companyPage?.companyName}
                </td> */}
                {/* <p className="companiesInfo" > 
                {companyDetails[0].companyName} </p>
                <p className="companiesInfo" > 
                {companyDetails[0].companySize}
                </p> */}
                


                {}
                <h2>
                    <i>Company Profile</i>
                    <b>
                        {/* <u>Company Name</u> */}
                        {/* <a href="https://www.tsbcareers.co.uk/" className="companyWebsite">className="Company Profile"</a> */}
                        <a href="https://www.tsbcareers.co.uk/" class="company-Profile">Company website</a>
                        {/* ADDING JSON */}
                        {/* <tr>
									<span className="gText">companyProfile</span>
									<td className="gName">{vacancies.companyProfile.companyName}</td>
								</tr> */}

                        
                        <img
						className="image1"
						src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        // src="https://upload.wikimedia.org/wikipedia/en/archive/b/b9/20130819104932%21TSB_logo_2013.svg"
						alt=""
						height="100px"
						width="100px"
					/>
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
                                <h3>Company size: {Company.companyDetails[0].companySize}</h3>
                                
                                <h3>Location: {Company.companyDetails[0].vacancies[0].location} </h3>
							</h2>
							
						</div>
						{/* <div className="compColumn"> */}
                        <div className="column">
							<p>{Company.companyDetails[0].about}</p>
                           
						</div>
                        </div>
                        {/* <div className="compRow">
						<div className="compColumn"> */}
                        <div className="row">
						<div className="column">
							<h2>
								<u>Roles Available</u>
							</h2>
							<h3>3</h3>
					</div>

                    
    
    </div>
    </div>
    )
}
// }
// export default CompanyProfile;
