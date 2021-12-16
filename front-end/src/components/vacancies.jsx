import './css/vacancies.css'
//import './utils/vacancies.js'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
};
function Vacancies() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
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
                }}><h3 style={{ textAlign: "center", marginBottom: "100px", fontWeight: "bold", fontStyle: "italic" }}><u>Vacancies</u></h3>

                    <input type="text" placeholder="Search for a job" style={{ width: "90%", }} ></input><button style={{ display: "inline", marginLeft: "20px" }}>Search</button> </div>
                <div style={{
                    margin: "100px 100px 20px 20px "
                }}><div class="row" style={{ width: "100%" }}>
                        <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div> <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div> <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div> <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div></div></div>
                <div style={{
                    margin: "100px 100px 20px 20px "
                }}><div class="row" style={{ width: "100%" }}>
                        <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div> <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div> <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div> <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div></div></div><div style={{
                                margin: "100px 100px 20px 20px "
                            }}><div class="row" style={{ width: "100%" }}>
                        <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div> <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div> <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div> <div class="column" style={{ borderStyle: "solid", borderWidth: "1px", padding: "20px", width: "17%", margin: "20px" }}>
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="column" style={{ width: "60%" }}>
                                    <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                    <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                </div><div class="column" style={{ textAlign: "right" }}>
                                    <img src="images/40752.jpg" alt="programmer" height="70px" width="70px" style={{ marginLeft: "10px" }}></img>

                                </div></div>
                            <div style={{ marginTop: "20px", width: "100%" }}>

                                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p> </div>
                            <button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>Find out more</button></div></div></div>




                {isOpen && <Popup
                    content={<>

                        <div class="row" style={{ marginBottom: "20px" }}>
                            <div class="column" style={{ width: "60%" }}>
                                <h3 style={{ marginTop: "10px" }}>Job title</h3>
                                <h3 style={{ marginTop: "10px" }}>Company name</h3>
                                <p style={{ marginTop: "10px" }}>Location</p></div><div class="column" style={{ textAlign: "right" }}>
                                <img src="images/40752.jpg" alt="programmer" height="100px" width="100px" style={{ marginBottom: "0px" }}></img>

                            </div></div>
                        <div style={{ marginTop: "20px", width: "100%" }}>

                            <p style={{ marginTop: "0px", lineHeight: "16pt" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo congue mi at sollicitudin. Sed in magna in mauris posuere fermentum nec vitae erat. Quisque ut lectus congue, malesuada enim sit amet, fermentum ligula. Nullam sit amet nulla mi. Mauris egestas tempus elit, vel semper eros dictum vitae. </p></div>
                    </>}
                    handleClose={togglePopup}
                />}
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

            </body></html>
    )
}
export default Vacancies