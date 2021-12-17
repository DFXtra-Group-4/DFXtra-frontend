import './css/editprofile.css'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Profile = ({ data }, { loading }) => {

    const { _id } = useParams();

    return (
        <>
            {
                loading ?
                    <h2> Data is loading...</h2> :
                    <div id='profile'>
                        <div className='sectionDiv'><div class="row" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", }}>
                            <div class="column" style={{ width: "46%", height: "300px", textAlign: "left" }} >
                                <h3 style={{ marginBottom: "10px", fontWeight: "bold", fontStyle: "italic" }}><b><u><i>Your profile</i></u></b></h3>
                                <NavLink to={`/trainee/${data._id}/edit`}>Edit Profile</NavLink>
                                <table >
                                    <tr>
                                        <td>Name:</td>
                                        <td>{data.personalDetails?.name.firstName + ' ' + data.personalDetails?.name.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td>Personal email:</td>
                                        <td>{data.personalDetails?.contact.email.email}</td>
                                    </tr>
                                    <tr><td>Digital futures email:
                                    </td>
                                        <td>{data.personalDetails?.contact.email.workEmail}</td></tr>
                                    <tr><td>Github:</td>
                                        <td>{data.personalDetails?.github}</td></tr>
                                    <tr><td>Linked in:</td>
                                        <td>{data.personalDetails?.linkedIn}</td></tr>
                                    <tr><td>Phone:</td>
                                        <td>{data.personalDetails?.contact.telNo}</td></tr>
                                </table>
                            </div>
                            <div className='column' style={{ width: "46%", height: "300px", }}  >
                                <h3 style={{ marginBottom: "10px", fontWeight: "bold", fontStyle: "italic" }}><b><u><i>Personal story summary</i></u></b></h3>
                                <p style={{ marginBottom: "10px" }}>Degree in XXX from YYY</p>
                                <p style={{ marginBottom: "10px" }}>4 school qualifications</p>
                                <p style={{ marginBottom: "10px" }}>5 work experiences</p>
                                <p style={{ marginBottom: "10px" }}>3 personal achievements</p>
                                <p style={{ marginBottom: "10px" }}>etc</p>

                            </div>
                        </div>
                        </div>
                        <div className='sectionDiv'><div class="row" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", paddingTop: "20px" }}>
                            <div className='column' style={{ width: "46%", height: "300px" }}>
                                <h3 style={{ marginBottom: "10px", fontWeight: "bold", fontStyle: "italic" }}><u>Your training</u></h3>
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

                            </div>
                            <div className='column' style={{ width: "46%", height: "300px" }}>
                                <p style={{ marginBottom: "10px", fontWeight: "bold", fontStyle: "italic" }}><u>Results</u></p>
                                <p style={{ marginBottom: "10px" }}>Module 1 Challenge A PASSED</p>
                                <p style={{ marginBottom: "10px" }}>Module 1 Challenge B PASSED</p>
                                <p style={{ marginBottom: "10px" }}>Module 2 Challenge C TODO</p>
                                <p style={{ marginBottom: "10px" }}>etc</p>

                            </div></div>
                        </div>


                        <div className='sectionDiv' style={{ paddingTop: "100px", paddingBottom: "100px", borderStyle: "solid", borderWidth: "1px", padding: "20px", height: "300px" }}>
                            <h3 style={{ marginBottom: "10px", fontWeight: "bold", fontStyle: "italic" }}><u>Your information</u></h3>

                            <div class="row" style={{ marginBottom: "100px", paddingBottom: "100px" }}>
                                <div class="column" style={{ width: "46%" }}>
                                    <div class="row">

                                        <div class="column" >
                                            <p style={{ fontWeight: "bold", fontStyle: "italic" }}><u>Badges</u></p><div style={{ borderStyle: "solid", borderWidth: "1px", padding: "10px", margin: "10px", marginLeft: "0", marginRight: "20px" }}><p style={{ marginBottom: "10px", }}>Badge A</p>
                                                <p>XXXX XX XX</p></div>
                                            <div style={{ borderStyle: "solid", borderWidth: "1px", padding: "10px", margin: "10px", marginLeft: "0", marginRight: "20px" }}> <p style={{ marginBottom: "10px" }}>Badge A</p>
                                                <p>XXXX XX XX</p></div></div>
                                        <div class="column">
                                            <div style={{ borderStyle: "solid", borderWidth: "1px", padding: "10px", margin: "10px", marginTop: "26px" }}>  <p style={{ marginBottom: "10px" }}>Badge A</p>
                                                <p>XXXX XX XX</p></div>
                                            <div style={{ borderStyle: "solid", borderWidth: "1px", padding: "10px", margin: "10px", marginTop: "10px" }}>  <p style={{ marginBottom: "10px" }}>Badge A</p>
                                                <p>XXXX XX XX</p></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='column' style={{ width: "46%" }}>
                                    <p style={{ fontWeight: "bold", fontStyle: "italic", marginBottom: "10px" }}><u>Scores</u></p><textarea cols='60' rows='8'> </textarea></div>

                            </div>
                        </div>
                        <div className='sectionDiv'>
                            <div style={{
                                width: "100%", backgroundColor: "#061450", color: "#fff", textAlign: "center", height: "70px", alignItems: "center", display: "flex",
                                justifyContent: "center"
                            }}>
                                <a style={{ color: "#fff", alignItems: "center", textAlign: "center", }} class="name" href="https://digitalfutures.com/">  ©  DFX 2021</a>
                            </div>
                        </div>
                    </div>

            }
        </>


    )
}
export default Profile