import './css/editprofile.css'



const Profile = ({ data }) => {
    return (
        <div>
            <div id="nav" style={{ margin: "20px ", padding: "20", width: "86.4%" }} >
                <p style={{ color: "#fff" }}>DFX</p>
                <ul>

                    <div className="dropdown">
                        <button className="dropbtn">Menu
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="link">Job board</a>
                            <a href="link">Industry partners</a>

                        </div></div>
                    <div className="dropdown">
                        <button className="dropbtn">Account
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="link">My profile</a>
                            <a href="link">Edit profile</a>
                            <a href="link">Log out</a>

                        </div></div>

                </ul>
            </div>
            <div style={{
                margin: "100px 100px 20px 20px "
            }}>
                <div className="left" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "46%", height: "300px", textAlign: "left" }} >
                    <h3>Your profile</h3>
                    <table >
                        <tr>
                            <td>Name:</td>
                            <td>{data.personalDetails?.name.firstName}</td>
                        </tr>
                        <tr>
                            <td>Personal email:</td>
                            <td>XXXXXXXXX</td>
                        </tr>
                        <tr><td>Digital futures email:
                        </td>
                            <td>YYYYYYYYY</td></tr>
                        <tr><td>Github:</td>
                            <td>grgsgesgss</td></tr>
                        <tr><td>Linked in:</td>
                            <td>fgsgdgdgsdgs</td></tr>
                        <tr><td>Phone:</td>
                            <td>gggdsgdsgds</td></tr>
                    </table>
                </div>
                <div className='right' style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "46%", height: "300px", }}  >
                    <h3>Personal story summary</h3>
                    <p>Degree in XXX from YYY</p>
                    <p>4 school qualifications</p>
                    <p>5 work experiences</p>
                    <p>3 personal achievements</p>
                    <p>etc</p>

                </div>
            </div>
            <div style={{
                margin: "100px 100px 20px 20px", paddingTop: "100px"
            }}>
                <div className='left' style={{ paddingTop: "100px", marginTop: "100px", borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "46%", height: "300px" }}>
                    <h3>Your training</h3>
                    <table>
                        <tr>
                            <td>Cohort:</td>
                            <td>XXXXXXXXX</td>
                        </tr>
                        <tr><td>Learning path:</td>
                            <td>XXXXXXXXXX</td></tr>
                        <tr><td>Trainer:</td>
                            <td>XXXXXX</td>
                        </tr><tr><td>Trainer finish date:</td><td>XXXXXXX</td></tr>
                    </table>
                    <div className='right' style={{ paddingTop: "100px", marginTop: "100px", borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "46%", height: "300px" }}>
                        <p>Module 1 Challenge A PASSED</p>
                        <p>Module 1 Challenge B PASSED</p>
                        <p>Module 2 Challenge C TODO</p>
                        <p>etc</p>

                    </div></div>
            </div>


            <div style={{
                margin: "100px 100px 20px 20px", paddingBottom: "100px"
            }}>


                <div className='left' style={{ paddingTop: "100px", marginTop: "100px", marginBottom: "100px", paddingBottom: "100px", borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "96.5%", height: "300px" }}>
                    <h3>Your information</h3>

                    <div className="row" style={{ marginBottom: "100px", paddingBottom: "100px" }}>
                        <div className="column" style={{ width: "50%" }}>
                            <div className="row">
                                <div className="column" > <p>Badges:</p></div>
                                <div className="column" ><div style={{ borderStyle: "solid", borderWidth: "1px", padding: "10px", margin: "10px" }}><p>Badge A</p>
                                    <p>XXXX XX XX</p></div>
                                    <div style={{ borderStyle: "solid", borderWidth: "1px", padding: "10px", margin: "10px" }}> <p>Badge A</p>
                                        <p>XXXX XX XX</p></div></div>
                                <div className="column">
                                    <div style={{ borderStyle: "solid", borderWidth: "1px", padding: "10px", margin: "10px" }}>  <p>Badge A</p>
                                        <p>XXXX XX XX</p></div>
                                    <div style={{ borderStyle: "solid", borderWidth: "1px", padding: "10px", margin: "10px" }}>  <p>Badge A</p>
                                        <p>XXXX XX XX</p></div>
                                </div>
                            </div>
                        </div>


                        <div className='column' style={{ width: "10%" }}>
                            <p>Scores:</p></div><div className='column' style={{ width: "40%", marginTop: "20px" }}><textarea cols='60' rows='8'> </textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                margin: "100px 100px 20px 20px", paddingBottom: "100px"
            }}>

                © <a className="name" href="https://digitalfutures.com/">  DFX 2021</a>

            </div>
        </div>
    )
}
export default Profile