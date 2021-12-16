import './css/profile.css'
import './utils/profile.js'
function EditProfile() {
    return (
        <html>
            <body>
                <div id="nav" style={{ margin: "20px ", padding: "20", width: "86.4%" }} >
                    <p style={{ color: "#fff" }}>DFX</p>
                    <ul>

                        <div className="dropdown">
                            <button className="dropbtn">Menu
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="/vacancies">Job board</a>
                                <a href="link">Industry partners</a>

                            </div></div>
                        <div className="dropdown">
                            <button className="dropbtn">Account
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="/profile">My profile</a>
                                <a href="/editprofile">Edit profile</a>
                                <a href="link">Log out</a>

                            </div></div>

                    </ul>
                </div>
                <div style={{
                    margin: "100px 100px 20px 20px "
                }}>
                    <div class="row" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px" }}>
                        <div class="column">
                            <h3 style={{ fontWeight: "bold", fontStyle: "italic" }}><u>Your profile</u></h3>
                        </div>
                        <div class="column">
                            <p style={{ marginBottom: "20px", fontWeight: "bold", fontStyle: "italic" }}><u>Profile completion</u></p>
                            <div id="myProgress">
                                <div id="myBar"></div>
                            </div>
                        </div>
                        <div class="column" style={{ textAlign: "right" }}>
                            <button style={{ marginTop: "10px", }}>Save profile</button>
                        </div>
                    </div>

                </div>
                <div style={{
                    margin: "100px 100px 20px 20px "
                }}>
                    <div class="row" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px" }}>
                        <div class="column" style={{ width: "90%" }}>
                            <h3 style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold", fontStyle: "italic" }}><u>Personal information</u></h3>

                            <form>
                                <table>
                                    <tr><td><label>Name:</label> </td><td><input type="text" placeholder='Your name' style={{ width: "200px" }}></input></td></tr>
                                    <tr><td><label>Personal email:</label> </td><td><input type="email" placeholder='Your personal email' style={{ width: "200px" }}></input></td></tr>
                                    <tr><td><label>Digital futures email:</label></td><td><input type="email" placeholder='Your personal email' style={{ width: "200px" }}></input></td></tr>
                                    <tr><td> <label>Github:</label> </td><td><input type="text" placeholder='Your github link' style={{ width: "200px" }}></input></td></tr>

                                    <tr><td><label>Linked in:</label></td><td> <input type="text" placeholder='Your linked in' style={{ width: "200px" }}></input></td></tr>
                                    <tr><td> <label>Phone:</label> </td><td><input type="number" placeholder='Your phone number' style={{ width: "200px" }}></input></td></tr>
                                    <tr><td><label for="gender">Gender:</label></td><td><select style={{ width: "208px" }} name="gender" id="gender">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>

                                    </select></td></tr>



                                    <tr><td><label for="nationality">Nationality:</label></td><td> <select style={{ width: "208px" }} name="nationality" id="nationality">
                                        <option value="white">White</option>
                                        <option value="black">Black</option>
                                        <option value="asian">Asian</option>

                                        <option value="mixed">Mixed</option>
                                    </select></td></tr>


                                    <tr><td><label for="personality">Personality type:</label>
                                    </td><td><select name="personality" id="personality" style={{ width: "208px" }} >
                                        <option value="introverted">Introverted</option>
                                        <option value="extroverted">Extroverted</option>


                                        <option value="other">Other</option>
                                    </select></td></tr>

                                </table>
                            </form>


                        </div><div class="column" style={{ textAlign: "right", width: "10%", marginTop: "20px", marginBottom: "20px" }}>
                        </div><img src="images/blank-profile-picture-973460_640.png" alt="profile pic"></img></div></div>
                <div style={{
                    margin: "100px 100px 20px 20px "
                }}>
                    <div style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px" }}>
                        <h3 style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold", fontStyle: "italic" }}><u>Personal story</u></h3>
                        <p style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold", fontStyle: "italic" }}><u>Degrees</u></p>
                        <form>
                            <table style={{ border: "1px solid black" }}>
                                <thead>
                                    <tr>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>University</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Subject</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Level</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Grade</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>From</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>To</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Weight</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Priority</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><input type="text" placeholder="University name" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Subject" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Level" style={{ width: "100px" }}></input></td>
                                        <td ><input type="text" placeholder="Grade" style={{ width: "70px" }}></input></td>
                                        <td ><input type="date" placeholder="From" style={{ width: "110px" }}></input></td>
                                        <td ><input type="date" placeholder="To" style={{ width: "110px", }}></input></td>
                                        <td ><input type="text" placeholder="Weight" style={{ width: "90px" }}></input></td>
                                        <td ><input type="text" placeholder="Priority" style={{ width: "90px" }}></input></td>
                                        <td ><input type="text" placeholder="Description" style={{ width: "137px" }}></input></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                        <p style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold", fontStyle: "italic" }}><u>School qualifications</u></p>
                        <form>
                            <table style={{ border: "1px solid black" }}>
                                <thead>
                                    <tr>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>School</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Exam type</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Subject</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Grade</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Year</th>

                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Weight</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Priority</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><input type="text" placeholder="School name" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Exam type" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Subject" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Grade" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Year" style={{ width: "120px" }}></input></td>

                                        <td ><input type="text" placeholder="Weight" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Priority" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Description" style={{ width: "121px" }}></input></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>

                        <p style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold", fontStyle: "italic" }}><u>Work experience</u></p>
                        <form>
                            <table style={{ border: "1px solid black" }}>
                                <thead>
                                    <tr>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Type </th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Company name</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Position</th>

                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>From</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>To</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Weight</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Priority</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><input type="text" placeholder="Type" style={{ width: "130px" }}></input></td>
                                        <td ><input type="text" placeholder="Company name" style={{ width: "130px" }}></input></td>
                                        <td ><input type="text" placeholder="Position" style={{ width: "128px" }}></input></td>

                                        <td ><input type="date" placeholder="From" style={{ width: "110px" }}></input></td>
                                        <td ><input type="date" placeholder="To" style={{ width: "110px" }}></input></td>
                                        <td ><input type="text" placeholder="Weight" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Priority" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Description" style={{ width: "121px" }}></input></td>
                                    </tr>
                                </tbody>
                            </table></form><p style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold", fontStyle: "italic" }}><u>Certificates and awards</u></p>
                        <form>
                            <table style={{ border: "1px solid black" }}>
                                <thead>
                                    <tr>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Type </th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Issuer</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Award</th>

                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Grade</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Year</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Weight</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Priority</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><input type="text" placeholder="Type" style={{ width: "124px" }}></input></td>
                                        <td ><input type="text" placeholder="Issuer" style={{ width: "130px" }}></input></td>
                                        <td ><input type="text" placeholder="Award" style={{ width: "128px" }}></input></td>

                                        <td ><input type="text" placeholder="Grade" style={{ width: "110px" }}></input></td>
                                        <td ><input type="text" placeholder="Year" style={{ width: "110px" }}></input></td>
                                        <td ><input type="text" placeholder="Weight" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Priority" style={{ width: "120px" }}></input></td>
                                        <td ><input type="text" placeholder="Description" style={{ width: "121px" }}></input></td>
                                    </tr>
                                </tbody>
                            </table></form>
                        <p style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold", fontStyle: "italic" }}><u>Portfolio</u></p>
                        <form>
                            <table style={{ border: "1px solid black" }}>
                                <thead>
                                    <tr>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Title </th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>URL</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Year</th>



                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Weight</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Priority</th>
                                        <th style={{ backgroundColor: "#061450", color: "#fff" }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><input type="text" placeholder="Title" style={{ width: "207px" }}></input></td>
                                        <td ><input type="text" placeholder="URL" style={{ width: "200px" }}></input></td>


                                        <td ><input type="text" placeholder="Year" style={{ width: "125px" }}></input></td>
                                        <td ><input type="text" placeholder="Weight" style={{ width: "125px" }}></input></td>
                                        <td ><input type="text" placeholder="Priority" style={{ width: "125px" }}></input></td>
                                        <td ><input type="text" placeholder="Description" style={{ width: "221px" }}></input></td>
                                    </tr>
                                </tbody>
                            </table></form>
                    </div></div>
                <div style={{
                    margin: "100px 100px 20px 20px", paddingBottom: "20px"
                }}>
                    <div style={{
                        width: "96.7%", backgroundColor: "#061450", color: "#fff", padding: "20px", textAlign: "center", height: "70px", alignItems: "center", display: "flex",
                        justifyContent: "center"
                    }}>
                        <a style={{ color: "#fff", alignItems: "center", textAlign: "center", }} class="name" href="https://digitalfutures.com/">  ©  DFX 2021</a>
                    </div>
                </div>
            </body >
        </html >
    )
}
export default EditProfile