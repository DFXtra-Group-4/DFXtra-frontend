import "./css/Navbar.css";
import { useEffect } from "react";

const Navbar = ({ data, navigateTo }) => {

  const handleLogout = () => {
    localStorage.clear();
  };

  console.log("the data is", data);
  useEffect(() => {

  }, [data]);

  const role = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {((localStorage.getItem("user") && data) ||
        (localStorage.getItem("user") &&
          JSON.parse(localStorage.getItem("user")).roles[0] ===
          "Industry")) && (
          <div id="nav">
            <p className="DFX" style={{ color: "#fff" }}>
              {/* {`DFX Logged in as ${data.personalDetails.contact.email.workEmail}`} */}
              DFX
            </p>
            <ul>
              {!(role.roles[0] === "Industry") && (
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
                      Transport for London
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
              )}
              <div className="dropdown">
                <button className="dropbtn">
                  Menu
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  {!(role.roles[0] === "Industry") && (
                    <a href="/vacancies">Job board</a>
                  )}
                  {/* <a href="/landing">Industry partners</a> */}
                  {(role.roles[0] === "Industry") &&
                    <a href="/talent">Talent Spotlight</a>
                  }
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  Account
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  {role.roles[0] === "Industry" && (
                    <a href={`/company/${role.name}`}>My profile</a>
                  )}

                  {data && (
                    <>
                      <a href={`/trainee/${data._id}`}>My profile</a>
                      <a href={`/trainee/${data._id}/edit`}>Edit profile</a>
                    </>
                  )
                  }
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
