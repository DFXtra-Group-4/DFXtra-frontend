import "./css/Navbar.css";
import { useEffect } from "react";

const Navbar = ({ data, navigateTo }) => {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      {localStorage.getItem("user") && data && (
        <div id="nav">
          <p className="DFX" style={{ color: "#fff" }}>
            {/* {`DFX Logged in as ${data.personalDetails.contact.email.workEmail}`} */}
            DFX
          </p>
          <ul>
            <div className="dropdown">
              <button className="dropbtn">
                Companies
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a
                  onClick={(e) => {
                    navigateTo(`/company/${e.target.textContent}`);
                  }}
                >
                  TSB Bank
                </a>
                <a
                  onClick={(e) => {
                    navigateTo(`/company/${e.target.textContent}`);
                  }}
                >
                  TFL- Transport for London
                </a>
                <a
                  onClick={(e) => {
                    navigateTo(`/company/${e.target.textContent}`);
                  }}
                >
                  Deloitte
                </a>
                <a
                  onClick={(e) => {
                    navigateTo(`/company/${e.target.textContent}`);
                  }}
                >
                  Sky
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                Talent Spotlight
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="/talent">Talent Spotlight</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                Menu
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="/vacancies">Job board</a>
                <a href="/landing">Industry partners</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                Account
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href={`/trainee/${data._id}`}>My profile</a>
                <a href={`/trainee/${data._id}/edit`}>Edit profile</a>
                <a href="/" onClick={handleLogout}>
                  Log out
                </a>
              </div>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
