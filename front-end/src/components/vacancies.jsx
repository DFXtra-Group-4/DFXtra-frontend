import "./css/vacancies.css";


import React, { useEffect, useState } from "react";


const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

function Vacancies({ allCompanyData, navigateTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [pageLoading, setPageLoading] = useState(true);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };



  useEffect(() => {

    setPageLoading(false);
  }, []);



  const VacanciesCardRow = (data, number) => {
    let vacancies = [];
    if (number === 1) {

      vacancies = [data[0]?.vacancies[0], data[0]?.vacancies[1], data[1]?.vacancies[0], data[1]?.vacancies[1]];

    }
    if (number === 2) {
      vacancies = [data[2]?.vacancies[0], data[2]?.vacancies[1], data[3]?.vacancies[0], data[3]?.vacancies[1]]
    }
    return (
      <>
        <div class="rowVacancies">
          {VacanciesCard(vacancies[0])}
          {VacanciesCard(vacancies[1])}
          {VacanciesCard(vacancies[2])}
          {VacanciesCard(vacancies[3])}
        </div>
      </>
    );
  };

  const VacanciesCard = (vacancyObject) => {
    return (
      <>
        {!vacancyObject ? <h2>Loading..</h2> :
          <div
            class="columnVacan"
            style={{
              padding: "20px",
              width: "17%"
            }}
          >
            <div class="rowVacancy" style={{ marginBottom: "20px" }}>
              <div style={{ width: "60%" }}>
                <div className="jobTitle">
                  <h3 style={{ marginTop: "10px" }}>{vacancyObject.jobTitle}</h3>
                </div>
                <div className="companyName">
                  <h3 style={{ marginTop: "10px" }}>{vacancyObject.companyName}</h3>
                </div>
                <div className="salary">
                  <h3>Salary: {vacancyObject.salary}</h3>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <img
                  src={vacancyObject.logo}
                  alt="programmer"
                  height="70px"
                  width="70px"
                  style={{ marginLeft: "10px" }}
                ></img>
              </div>
            </div>
            <div className="vacLocation">
              <div style={{ marginTop: "20px", width: "100%" }}>
                <p style={{ marginTop: "0px", lineHeight: "16pt" }}>{vacancyObject.location} </p>
              </div>
            </div>
            <div className="buttonVacancy">
              {/* <button style={{ marginTop: "30px" }} id="myBtn" onClick={() => { togglePopup(); setPopupData(vacancyObject); }}>
                Find out more
              </button> */}
              <button class="vacancyBtn" id="myBtn" onClick={() => { togglePopup(); setPopupData(vacancyObject); }}>
                Find out more
              </button>
            </div>
          </div>
        }
      </>
    );
  };

  const VacanciesPopUp = () => {
    return (
      <>
        {
          !pageLoading &&
          <>
            <div class="rowVacancy" style={{ marginBottom: "20px" }}>
              <div style={{ width: "60%" }}>
                <h3 style={{ marginTop: "10px" }}>{popupData.jobTitle}</h3>
                <h3 style={{ marginTop: "10px" }}>{popupData.companyName}</h3>

                <p style={{ marginTop: "10px" }}>{popupData.location}</p>

              </div>
              <div c style={{ textAlign: "right" }}>
                <img
                  src={popupData.logo}
                  alt="programmer"
                  height="100px"
                  width="100px"
                  style={{ marginBottom: "0px" }}
                ></img>
              </div>
            </div>
            <div style={{ marginTop: "20px", width: "100%" }}>
              <p style={{ marginTop: "0px", lineHeight: "16pt" }}>
                {popupData.jobDescription}{" "}
              </p>
            </div>
          </>
        }
      </>
    );
  };

  return (
    <>
      {!(localStorage.getItem('user')) && navigateTo('/')}
      {!(allCompanyData) ?
        <h2>Page loading...</h2>
        :
        <div className="vacanciesPage">
          <h2
            className="vacanciesTitle"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            <h1>Vacancies</h1>
          </h2>
          {VacanciesCardRow(allCompanyData, 1)}
          {VacanciesCardRow(allCompanyData, 2)}

          {isOpen && <Popup content={VacanciesPopUp()} handleClose={togglePopup} />}
        </div>
      }
    </>
  );
}
export default Vacancies;
