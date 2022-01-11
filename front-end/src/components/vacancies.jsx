import "./css/vacancies.css";
//import './utils/vacancies.js'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Company from "./company.json";
import axios from 'axios';

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

function Vacancies({ navigateTo }) {
	const [isOpen, setIsOpen] = useState(false);
	const [popupData, setPopupData] = useState({});
	const [allCompanyData, setAllCompanyData] = useState({});
	const [pageLoading, setPageLoading] = useState(true);
	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	const getCompanyData = async () => {
		try {
			console.log("making GET request...");
			const res = await axios.get(
				`http://127.0.0.1:4000/vacancies`
			);
			console.log('company data is...', res.data);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		const getData = async () => {
			setAllCompanyData(await getCompanyData());
		};
		getData();
		setPageLoading(false);
	}, []);

	// may need similar function for company profile data load
	// const filtered = () => {
	// 	Company.companyDetails.forEach(object => {
	// 		if (object.vacancies.some(vacancy => vacancy === vacancyObject)) {
	// 			console.log(object);
	// 			setPopupData(object);
	// 			console.log(popupData)
	// 			return object
	// 		}
	// 	})
	// }

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
								<h3 style={{ marginTop: "10px" }}>{vacancyObject.jobTitle}</h3>
								<h3 style={{ marginTop: "10px" }}>{vacancyObject.companyName}</h3>
							</div>
							<div style={{ textAlign: "right" }}>
								<img
									src="images/40752.jpg"
									alt="programmer"
									height="70px"
									width="70px"
									style={{ marginLeft: "10px" }}
								></img>
							</div>
						</div>
						<div style={{ marginTop: "20px", width: "100%" }}>
							<p style={{ marginTop: "0px", lineHeight: "16pt" }}>{vacancyObject.location} </p>
						</div>
						<button style={{ marginTop: "30px" }} id="myBtn" onClick={() => { togglePopup(); setPopupData(vacancyObject); }}>
							Find out more
						</button>
					</div>
				}
			</>
		);
	};

	const VacanciesPopUp = () => {
		return (
			<>
				{!pageLoading &&
					<>
						<div class="rowVacancy" style={{ marginBottom: "20px" }}>
							<div style={{ width: "60%" }}>
								<h3 style={{ marginTop: "10px" }}>{popupData.jobTitle}</h3>
								<h3 style={{ marginTop: "10px" }}>{popupData.companyName}</h3>
								<p style={{ marginTop: "10px" }}>{popupData.location}</p>
							</div>
							<div c style={{ textAlign: "right" }}>
								<img
									src="images/40752.jpg"
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
			{pageLoading ?
				<h2>Page loading...</h2>
				:
				<div className="vacanciesPage">
					<h2
						className="vacanciesTitle"
						style={{ textAlign: "center", fontWeight: "bold", fontStyle: "italic" }}
					>
						<u>Vacancies</u>
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
