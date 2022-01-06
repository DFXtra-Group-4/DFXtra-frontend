import "./css/CompanyProfile.css"
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function CompanyProfile() {
    return (
        
    <div id="companyProfile">
        <div className="row">
            <div className="column">
                <b>Company Name</b>
                <h2>
                    
                    <b>
                        {/* <u>Company Name</u> */}
                        {/* <a href="https://www.tsbcareers.co.uk/" className="companyWebsite">className="Company Profile"</a> */}
                        <a href="https://www.tsbcareers.co.uk/" class="company-Profile">Company website</a>


                        
                        <img
						className="image"
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

        <div className="row">
						<div className="column">
							<h2>
								<u>About the company</u>
							</h2>
							
						</div>
						<div className="column">
							<p>TSB Bank plc is a retail and commercial bank in the United Kingdom and a subsidiary of Sabadell Group. TSB Bank operates a network of 536 branches across England, Scotland and Wales but has not had a presence in Northern Ireland since 1991. TSB in its present form launched on 9 September 2013.</p>
						</div>
                        </div>
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
export default CompanyProfile;