import "./css/vacancies.css";
//import './utils/vacancies.js'
import { Link } from "react-router-dom";
import React, { useState } from "react";
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

function Vacancies() {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	const VacanciesSearch = () => {
		return (
			<>
				<div className="searchBox" text-align="center">
					<h2
						className="vacanciesTitle"
						style={{ textAlign: "center", fontWeight: "bold", fontStyle: "italic" }}
					>
						<u>Vacancies</u>
					</h2>
					<input
						type="text"
						placeholder="Search for a job"
						style={{ width: "100%" }}
					></input>
					<button style={{ display: "inline" }}>Search</button>
				</div>
			</>
		);
	};

	const VacanciesCard = () => {
		return (
			<>
				<div
					class="columnVacan"
					style={{
						borderStyle: "solid",
						borderWidth: "1px",
						borderRadius: "3%",
						padding: "20px",
						width: "17%"
					}}
				>
					<div class="rowVacancy" style={{ marginBottom: "20px" }}>
						<div class="columnVacan" style={{ width: "60%" }}>
							<h3 style={{ marginTop: "10px" }}>Job title</h3>
							<h3 style={{ marginTop: "10px" }}>Company name</h3>
						</div>
						<div class="columnVacan" style={{ textAlign: "right" }}>
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
						<p style={{ marginTop: "0px", lineHeight: "16pt" }}>Summary, Location </p>
					</div>
					<button style={{ marginTop: "10px" }} id="myBtn" onClick={togglePopup}>
						Find out more
					</button>
				</div>
			</>
		);
	};

	const VacanciesCardRow = () => {
		return (
			<>
				<div class="rowVacancies">
					{VacanciesCard()}
					{VacanciesCard()}
					{VacanciesCard()}
					{VacanciesCard()}
				</div>
			</>
		);
	};

	const VacanciesPopUp = () => {
		return (
			<>
				<div class="rowVacancy" style={{ marginBottom: "20px" }}>
					<div class="columnVacan" style={{ width: "60%" }}>
						<h3 style={{ marginTop: "10px" }}>Job title</h3>
						<h3 style={{ marginTop: "10px" }}>Company name</h3>
						<p style={{ marginTop: "10px" }}>Location</p>
					</div>
					<div class="columnVacan" style={{ textAlign: "right" }}>
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo
						congue mi at sollicitudin. Sed in magna in mauris posuere fermentum nec
						vitae erat. Quisque ut lectus congue, malesuada enim sit amet, fermentum
						ligula. Nullam sit amet nulla mi. Mauris egestas tempus elit, vel semper
						eros dictum vitae.{" "}
					</p>
				</div>
			</>
		);
	};

	return (
		<div className="vacanciesPage">
			{VacanciesSearch()}

			{VacanciesCardRow()}
			{VacanciesCardRow()}
			{VacanciesCardRow()}

			{isOpen && <Popup content={VacanciesPopUp()} handleClose={togglePopup} />}
		</div>
	);
}
export default Vacancies;
