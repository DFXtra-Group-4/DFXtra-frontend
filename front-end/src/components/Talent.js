import React, { useState, useEffect } from "react";
import "./css/Talent.css";
import { Link } from "react-router-dom";
import ScoreCard from "./ScoreCard";

function Card({ allProfileData, navigateTo }) {
  console.log("talentCard data is ...", allProfileData);

  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [searchBarValue, setSearchBarValue] = useState("");
  const [dataFilter, setDataFilter] = useState(true);
  const [softwareFilter, setSoftwareFilter] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const setOpacity = () => {
    const page = document.querySelector("#allTalent");
    page.style.opacity = "50%";
    // const title = document.querySelector(".title");
    // title.style.opacity = "50%";
    // const spotlightInfo = document.querySelector(".spotlightInfo");
    // spotlightInfo.style.opacity = "50%";
    // const container = document.querySelector(".container");
    // container.style.opacity = "50%";
    return true;
  };

  const searchStudents = async () => {
    console.log("data filter is ", dataFilter);
    console.log("software filter is ", softwareFilter);
    console.log("search is ", searchBarValue);

    if (searchBarValue.length === 0) {
      setDataFilter(true);
      setSoftwareFilter(true);
    } else if (
      "software Engineering".includes(searchBarValue) &&
      searchBarValue.length > 0
    ) {
      setDataFilter(false);
      setSoftwareFilter(true);
    } else if (
      "data science".includes(searchBarValue) &&
      searchBarValue.length > 0
    ) {
      setDataFilter(true);
      setSoftwareFilter(false);
    }
  };

  useEffect(() => {
    searchStudents();
  }, [dataFilter, softwareFilter, searchBarValue]);

  const talentCard = (courseType) => {
    console.log("dataFilter is...", dataFilter);
    return (
      <>
        {allProfileData
          .filter((subData) => subData.yourTraining.trainingPath === courseType)
          .map((data) => (
            <div className="topCard" key={data._id}>
              <div className="sub-topCard">
                <img
                  className="image"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  alt=""
                  height="100px"
                  width="100px"
                />
                <h3>
                  {" "}
                  {`${data.personalDetails.name.firstName}` +
                    " " +
                    `${data.personalDetails.name.lastName}`}
                </h3>

                <p> {data.personalDetails.profileHeadline}</p>
              </div>
              <p>
                <button
                  onClick={() => {
                    togglePopup();
                    setProfileData(data);
                  }}
                  class="spotlightBtn"
                >
                  View Profile
                </button>
              </p>
            </div>
          ))}
      </>
    );
  };

  return (
    <>
      {!localStorage.getItem("user") && navigateTo("/")}
      {isOpen && setOpacity() && (
        <ScoreCard setIsOpen={setIsOpen} profileData={profileData} />
      )}
      <div id="allTalent">
        <div id="headingSection">
          <div className="title">
            <h2
              style={{
                marginLeft: "0px",
                marginBottom: "20px",
                paddingBottom: "20px",
              }}
            >
              Talent Spotlight
            </h2>
          </div>
          <div className="spotlightInformation">
            <p style={{ marginTop: "20px" }}>
              {" "}
              Here are all of the software engineers and data science graduates
              from the Digital Futures academy. Click on the view profile button
              to see more information about them.
            </p>
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            Search :{" "}
            <input
              class="searchbar"
              type="text"
              placeholder="Search for a graduate by discipline"
              value={searchBarValue}
              onChange={(e) => {
                setSearchBarValue(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="container">
          <div className="flex-container">
            <h2 className="flex-containerh1">Graduates</h2>

            {softwareFilter && talentCard("Software Engineering")}
            {dataFilter && talentCard("Data Science")}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
