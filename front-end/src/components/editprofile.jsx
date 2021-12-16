import './css/profile.css';
import './utils/profile.js';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


function EditProfile({ profileData, updateData }) {

    let navigate = useNavigate();
    // const [data, setData] = useState({});
    // console.log('data is ...', profileData);

    const dataObject = {
        firstName: '',
        lastName: '',
        // personalEmail: "",
        // workEmail: "",
        // gitHub: "",
        // linkedIn: "",
        // telNo: "",
        // gender: "",
        // personalityType: "",
        // nationality: ""
    };

    const onChange = (e) => {
        console.log(e.target);
        dataObject[e.target.name] = e.target.value;
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('data sent..', dataObject);
        updateData(dataObject);
        navigate(`/trainee/${profileData._id}`, { replace: true });
    }

    useEffect(() => {

    }, [profileData])

    return (
        <form>

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
                <div class="row" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px" }}>
                    <div class="column">
                        <h3>Your profile</h3>
                    </div>
                    <div class="column">
                        <p style={{ marginBottom: "20px" }}>Profile completion</p>
                        <div id="myProgress">
                            <div id="myBar"></div>
                        </div>
                    </div>
                    <div class="column" style={{ textAlign: "right" }}>
                        <button style={{ marginTop: "10px", }} onSubmit={(e) => e.preventDefault}>Save profile</button>
                    </div>
                </div>

            </div>
            <div style={{
                margin: "100px 100px 20px 20px "
            }}>
                <div class="row" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px" }}>
                    <div class="column" style={{ width: "90%" }}>
                        <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>Personal information</h3>

                        <form>
                            <table>
                                <tr><td><label>First Name:</label> </td><td><input type="text" placeholder='Your name' name='firstName' onChange={onChange} style={{ width: "200px" }}></input></td></tr>
                                <tr><td><label>Last Name:</label> </td><td><input type="text" placeholder='Your name' name='lastName' onChange={onChange} style={{ width: "200px" }}></input></td></tr>
                                {/* <tr><td><label>Personal email:</label> </td><td><input type="email" placeholder='Your personal email' name='personalEmail' onChange={onChange} style={{ width: "200px" }}></input></td></tr>
                                <tr><td><label>Digital futures email:</label></td><td><input type="email" placeholder='Your personal email' name='workEmail' onChange={onChange} style={{ width: "200px" }}></input></td></tr>
                                <tr><td> <label>Github:</label> </td><td><input type="text" placeholder='Your github link' name='gitHub' onChange={onChange} style={{ width: "200px" }}></input></td></tr>

                                <tr><td><label>Linked in:</label></td><td> <input type="text" placeholder='Your linked in' name='linkedIn' onChange={onChange} style={{ width: "200px" }}></input></td></tr>
                                <tr><td> <label>Phone:</label> </td><td><input type="number" placeholder='Your phone number' name='telNo' onChange={onChange} style={{ width: "200px" }}></input></td></tr>
                                <tr><td><label for="gender">Gender:</label></td><td><select style={{ width: "208px" }} name="gender" onChange={onChange} id="gender">
                                    <option value="male" n>Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select></td></tr>

                                <tr><td><label for="nationality">Nationality:</label></td><td> <select style={{ width: "208px" }} name="nationality" onChange={onChange} id="nationality">
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                    <option value="asian">Asian</option>

                                    <option value="mixed">Mixed</option>
                                </select></td></tr>


                                <tr><td><label for="personality">Personality type:</label>
                                </td><td><select name="personality" id="personality" onChange={onChange} style={{ width: "208px" }} >
                                    <option value="introverted">Introverted</option>
                                    <option value="extroverted">Extroverted</option>


                                    <option value="other">Other</option>
                                </select></td></tr> */}

                            </table>
                            <button type='submit' onClick={onSubmit}>Submit</button>
                        </form>


                    </div><div class="column" style={{ textAlign: "right", width: "10%", marginTop: "20px", marginBottom: "20px" }}>
                    </div><img src="images/blank-profile-picture-973460_640.png" alt="profile pic"></img></div></div>
            <div style={{
                margin: "100px 100px 20px 20px "
            }}>
                <div style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px" }}>
                    <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>Personal story</h3>
                    <p style={{ marginTop: "20px", marginBottom: "20px" }}>Degrees</p>
                    <form>
                        <table style={{ border: "1px solid black" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: "1px solid black" }}>University</th>
                                    <th style={{ border: "1px solid black" }}>Subject</th>
                                    <th style={{ border: "1px solid black" }}>Level</th>
                                    <th style={{ border: "1px solid black" }}>Grade</th>
                                    <th style={{ border: "1px solid black" }}>From</th>
                                    <th style={{ border: "1px solid black" }}>To</th>
                                    <th style={{ border: "1px solid black" }}>Weight</th>
                                    <th style={{ border: "1px solid black" }}>Priority</th>
                                    <th style={{ border: "1px solid black" }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="University name" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Subject" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Level" style={{ width: "100px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Grade" style={{ width: "70px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="date" placeholder="From" style={{ width: "110px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="date" placeholder="To" style={{ width: "110px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Weight" style={{ width: "90px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Priority" style={{ width: "90px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Description" style={{ width: "137px" }}></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <p style={{ marginTop: "20px", marginBottom: "20px" }}>School qualifications</p>
                    <form>
                        <table style={{ border: "1px solid black" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: "1px solid black" }}>School</th>
                                    <th style={{ border: "1px solid black" }}>Exam type</th>
                                    <th style={{ border: "1px solid black" }}>Subject</th>
                                    <th style={{ border: "1px solid black" }}>Grade</th>
                                    <th style={{ border: "1px solid black" }}>Year</th>

                                    <th style={{ border: "1px solid black" }}>Weight</th>
                                    <th style={{ border: "1px solid black" }}>Priority</th>
                                    <th style={{ border: "1px solid black" }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="School name" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Exam type" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Subject" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Grade" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Year" style={{ width: "120px" }}></input></td>

                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Weight" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Priority" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Description" style={{ width: "120px" }}></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                    <p style={{ marginTop: "20px", marginBottom: "20px" }}>Work experience</p>
                    <form>
                        <table style={{ border: "1px solid black" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: "1px solid black" }}>Type </th>
                                    <th style={{ border: "1px solid black" }}>Company name</th>
                                    <th style={{ border: "1px solid black" }}>Position</th>

                                    <th style={{ border: "1px solid black" }}>From</th>
                                    <th style={{ border: "1px solid black" }}>To</th>
                                    <th style={{ border: "1px solid black" }}>Weight</th>
                                    <th style={{ border: "1px solid black" }}>Priority</th>
                                    <th style={{ border: "1px solid black" }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Type" style={{ width: "130px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Company name" style={{ width: "130px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Position" style={{ width: "128px" }}></input></td>

                                    <td style={{ border: "1px solid black" }}><input type="date" placeholder="From" style={{ width: "110px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="date" placeholder="To" style={{ width: "110px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Weight" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Priority" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Description" style={{ width: "120px" }}></input></td>
                                </tr>
                            </tbody>
                        </table></form><p style={{ marginTop: "20px", marginBottom: "20px" }}>Certificates and awards</p>
                    <form>
                        <table style={{ border: "1px solid black" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: "1px solid black" }}>Type </th>
                                    <th style={{ border: "1px solid black" }}>Issuer</th>
                                    <th style={{ border: "1px solid black" }}>Award</th>

                                    <th style={{ border: "1px solid black" }}>Grade</th>
                                    <th style={{ border: "1px solid black" }}>Year</th>
                                    <th style={{ border: "1px solid black" }}>Weight</th>
                                    <th style={{ border: "1px solid black" }}>Priority</th>
                                    <th style={{ border: "1px solid black" }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Type" style={{ width: "124px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Issuer" style={{ width: "130px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Award" style={{ width: "128px" }}></input></td>

                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Grade" style={{ width: "110px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Year" style={{ width: "110px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Weight" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Priority" style={{ width: "120px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Description" style={{ width: "120px" }}></input></td>
                                </tr>
                            </tbody>
                        </table></form>
                    <p style={{ marginTop: "20px", marginBottom: "20px" }}>Portfolio</p>
                    <form>
                        <table style={{ border: "1px solid black" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: "1px solid black" }}>Title </th>
                                    <th style={{ border: "1px solid black" }}>URL</th>
                                    <th style={{ border: "1px solid black" }}>Year</th>



                                    <th style={{ border: "1px solid black" }}>Weight</th>
                                    <th style={{ border: "1px solid black" }}>Priority</th>
                                    <th style={{ border: "1px solid black" }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Title" style={{ width: "207px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="URL" style={{ width: "200px" }}></input></td>


                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Year" style={{ width: "125px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Weight" style={{ width: "125px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Priority" style={{ width: "125px" }}></input></td>
                                    <td style={{ border: "1px solid black" }}><input type="text" placeholder="Description" style={{ width: "220px" }}></input></td>
                                </tr>
                            </tbody>
                        </table></form>
                </div></div>
            <div style={{
                margin: "100px 100px 20px 20px", paddingBottom: "100px"
            }}>

                © <a class="name" href="https://digitalfutures.com/">  DFX 2021</a>

            </div>
        </form>

    )
}
export default EditProfile