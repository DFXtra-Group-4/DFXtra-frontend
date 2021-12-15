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
                    <div class="row">
                        <div class="column">
                            <h3>Your profile</h3>
                        </div>
                        <div class="column">
                            <p>Profile completion</p>
                            <div id="myProgress">
                                <div id="myBar"></div>
                            </div>
                        </div>
                        <div class="column" style={{ textAlign: "right" }}>
                            <button style={{ marginTop: "20px", }}>Save profile</button>
                        </div>
                    </div>

                </div>
            </body>
        </html>
    )
}
export default EditProfile