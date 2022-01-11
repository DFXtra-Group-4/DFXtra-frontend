import "./css/editprofile.css";
import "./utils/profile.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { options } from "./utils/dropDownOptions.json";
import validateInputs from "./utils/inputValidations";

function EditProfile({ profileData, updateData, navigateTo, sendDelRequest }) {
  let navigate = useNavigate();

  const dataObject = {
    firstName: profileData.personalDetails?.name.firstName,
    lastName: profileData.personalDetails?.name.lastName,
    personalEmail: profileData.personalDetails?.contact?.email.email,
    workEmail: profileData.personalDetails?.contact?.email.workEmail,
    gitHub: profileData.personalDetails?.gitHub,
    linkedIn: profileData.personalDetails?.linkedIn,
    telNo: profileData.personalDetails?.contact?.telNo,
    gender: profileData.personalDetails?.gender,
    personalityType: profileData.personalDetails?.personalityType,
    nationality: profileData.personalDetails?.nationality,
    profileHeadline: profileData.personalDetails?.profileHeadline,
  };

  const dataObject2 = {
    schoolQualifications: {
      school: "",
      examType: "",
      subject: "",
      grade: "",
      year: "",
      weight: "",
      priority: "",
      description: ""
    }
  };


  const onChange = e => {
    dataObject[e.target.name] = e.target.value;
  };

  const onSubmit = e => {
    e.preventDefault();
    // console.log("data sent..", dataObject);
    updateData(dataObject);
    navigate(`/trainee/${profileData._id}`, { replace: true });
  };

  const [schoolQs, setSchoolQs] = useState(dataObject2);

  useEffect(() => { }, [profileData, schoolQs]);

  const onChange2 = e => {
    setSchoolQs((prevState) => (
      {
        ...prevState,
        schoolQualifications: {
          ...prevState.schoolQualifications,
          [e.target.name]: e.target.value
        }
      }))
    // console.log(schoolQs)
  }

  const onSubmit2 = e => {
    e.preventDefault();
    updateData(schoolQs);
    setSchoolQs((prevState) => (
      {
        ...prevState,
        schoolQualifications: dataObject2.schoolQualifications
      }))
    // console.log(schoolQs);
  };

  const onClick = e => {
    e.preventDefault();
    const id = profileData.personalStory.schoolQualifications[e.target.name]._id;
    sendDelRequest({ id: id });
  }

  const isEnabled = () => {
    for (const prop in schoolQs.schoolQualifications) {
      if (schoolQs.schoolQualifications[prop] === "") {
        return false;
      }
    }
    return true;
  }



  const yourProfile = () => {
    return (
      <div className="editRow">
        <h2>
          <h3>Your profile</h3>
        </h2>
        <h2></h2>
        <div id="myProgress">
          <div id="myBar"></div>
        </div>

        <button className="saveBtn" type="submit">
          Save profile
        </button>
      </div>
    );
  };

  const mapOptionsGeneral = (optionType) => {
    return (
      options[optionType].map(x => <option value={x}>{x.slice(0, 1).toUpperCase() + x.slice(1)}</option>)
    );
  }
  const personalInformation = () => {
    return (
      <div className="personalInformationDiv">
        <div className="personalInfoH3">
          <h2> Personal information </h2>
        </div>
        <div id="personalInfoInputs">
          <span className="profileLabelSpan">
            <label className="ggText">First Name:</label>
            <input
              type="text"
              placeholder="Your name"
              name="firstName"
              onChange={onChange}
              defaultValue={dataObject.firstName}
              validations={[validateInputs.required]}
            ></input>
          </span>
          <span className="profileLabelSpan">
            <label className="ggText">Last Name:</label>
            <input
              type="text"
              placeholder="Your name"
              name="lastName"
              onChange={onChange}
              defaultValue={dataObject.lastName}
            ></input>
          </span>
          <span className="profileLabelSpan">
            <label className="ggText">Personal Email:</label>
            <input
              type="email"
              placeholder="Your personal email"
              name="personalEmail"
              onChange={onChange}
              defaultValue={dataObject.personalEmail}
              disabled
            ></input>
          </span>
          <span className="profileLabelSpan">
            <label className="ggText">Digital Futures Email:</label>
            <input
              type="text"
              placeholder="Your work email"
              name="workEmail"
              onChange={onChange}
              defaultValue={dataObject.workEmail}
              disabled
            ></input>
          </span>
          <span className="profileLabelSpan">
            <label className="ggText">Github</label>
            <input
              type="text"
              placeholder="Your github link"
              name="gitHub"
              onChange={onChange}
              defaultValue={dataObject.gitHub}
            ></input>
          </span>
          <span className="profileLabelSpan">
            <label className="ggText">LinkedIn</label>
            <input
              type="text"
              placeholder="Your linked in"
              name="linkedIn"
              onChange={onChange}
              defaultValue={dataObject.linkedIn}
            ></input>
          </span>
          <span className="profileLabelSpan">
            <label className="ggText">Telephone Number:</label>
            <input
              type="text"
              placeholder="Your phone number"
              name="telNo"
              onChange={onChange}
              defaultValue={dataObject.telNo}
            ></input>
          </span>
          <span className="profileLabelSpan">
            <label className="ggText" style={{ position: "absolute" }}>Profile Headline:</label>
            <textarea
              style={{ marginLeft: "12rem", marginTop: "1.2rem", width: "15rem" }}
              type="text"
              placeholder="Enter profile headline description"
              name="profileHeadline"
              onChange={onChange}
              defaultValue={dataObject.profileHeadline}
            ></textarea>
          </span>
        </div>
        <div id="selectDiv">
          <span className="selectSpan">
            <label className="ggText">Gender:</label>
            <select
              style={{ width: "208px" }}
              name="gender"
              onChange={onChange}
              id="gender"
            >
              <option value="" disabled selected>
                {dataObject.gender?.slice(0, 1).toUpperCase() + dataObject.gender?.slice(1)} </option>
              {mapOptionsGeneral("gender")}
            </select>
          </span>
          <span className="selectSpan">
            <label className="ggText">Nationality:</label>
            <select
              style={{ width: "208px" }}
              name="nationality"
              onChange={onChange}
              id="nationality"
            >
              <option value="" disabled selected>
                {dataObject.nationality?.slice(0, 1).toUpperCase() + dataObject.nationality?.slice(1)}
              </option>
              {mapOptionsGeneral("nationality")}
            </select>
          </span>
          <span className="selectSpan">
            <label className="ggText">Personality Type:</label>
            <select
              name="personalityType"
              id="personalityType"
              onChange={onChange}
              style={{ width: "208px" }}
            >
              <option value="" disabled selected>
                {dataObject.personalityType?.slice(0, 1).toUpperCase() + dataObject.personalityType?.slice(1)}
              </option>
              {mapOptionsGeneral("personalityType")}
            </select>
          </span>
        </div>
        {/* <img id="selfieUpload"></img>  /*USER STORY LOWER PRIORITY*/}
      </div>
    );
  };

  const schoolQualificationsTableRows = () => {
    return (
      profileData.personalStory?.schoolQualifications.map((x, index) => (
        <tr>
          <td>
            <p style={{ fontSize: "10pt" }}>{x.school}</p>

          </td>
          <td>

            <p style={{ fontSize: "10pt" }}>{x.examType}</p>
          </td>
          <td>

            <p style={{ fontSize: "10pt" }}>{x.subject}</p>

          </td>
          <td>

            <p style={{ fontSize: "10pt" }}>{x.grade}</p>

          </td>
          <td>

            <p style={{ fontSize: "10pt" }}>{x.year}</p>

          </td>
          <td>

            <p style={{ fontSize: "10pt" }}>{x.weight}</p>

          </td>
          <td>

            <p style={{ fontSize: "10pt" }}>{x.priority}</p>

          </td>
          <td>

            <p style={{ fontSize: "10pt" }}>{x.description}</p>

          </td>
          <td><button type="submit" style={{ width: "54px" }} name={index} onClick={onClick} key={"tr_" + index} >Delete</button></td>
        </tr>)
      ));
  }

  const schoolQualificationsTable = () => {
    return (
      <>
        <p className="ggText">
          <u>School qualifications</u>
        </p>
        <table style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#061450", color: "#fff" }}>
                School
              </th>
              <th style={{ backgroundColor: "#061450", color: "#fff" }}>
                Exam type
              </th>
              <th style={{ backgroundColor: "#061450", color: "#fff" }}>
                Subject
              </th>
              <th style={{ backgroundColor: "#061450", color: "#fff" }}>
                Grade
              </th>
              <th style={{ backgroundColor: "#061450", color: "#fff" }}>
                Year
              </th>

              <th style={{ backgroundColor: "#061450", color: "#fff" }}>
                Weight
              </th>
              <th style={{ backgroundColor: "#061450", color: "#fff" }}>
                Priority
              </th>
              <th style={{ backgroundColor: "#061450", color: "#fff" }}>
                Description
              </th>
              <th style={{ backgroundColor: "#061450", color: "#fff" }}>

              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="School name"
                  name="school"
                  id="id"
                  style={{ width: "110px" }}
                  onChange={onChange2}
                  value={schoolQs.schoolQualifications.school}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Exam type"
                  name="examType"
                  id="examType"
                  style={{ width: "110px" }}
                  onChange={onChange2}
                  value={schoolQs.schoolQualifications.examType}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  style={{ width: "110px" }}
                  onChange={onChange2}
                  value={schoolQs.schoolQualifications.subject}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Grade"
                  name="grade"
                  id="grade"
                  style={{ width: "108px" }}
                  onChange={onChange2}
                  value={schoolQs.schoolQualifications.grade}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Year"
                  name="year"
                  id="year"
                  style={{ width: "110px" }}
                  onChange={onChange2}
                  value={schoolQs.schoolQualifications.year}
                ></input>
              </td>

              <td>
                <input
                  type="text"
                  placeholder="Weight"
                  name="weight"
                  id="weight"
                  style={{ width: "110px" }}
                  onChange={onChange2}
                  value={schoolQs.schoolQualifications.weight}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Priority"
                  name="priority"
                  id="priority"
                  style={{ width: "110px" }}
                  onChange={onChange2}
                  value={schoolQs.schoolQualifications.priority}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  id="description"
                  style={{ width: "129px" }}
                  onChange={onChange2}
                  value={schoolQs.schoolQualifications.description}
                ></input>
              </td>
              {isEnabled() ?
                <td><button type="submit" style={{ width: "54px" }} name="update" >Add</button></td> :
                <td><button type="submit" style={{ width: "54px" }} name="update" disabled >Add</button></td>
              }
              {/* <td><button type="submit" style={{ width: "54px" }} name="update" >Add</button></td> */}
            </tr>
            {schoolQualificationsTableRows()}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      {!(localStorage.getItem('user')) && navigateTo('/')}
      <form onSubmit={onSubmit} className="myForm">
        {yourProfile()}
        {personalInformation()}
      </form>

      <form onSubmit={onSubmit2} className="myForm">
        <div className="personalStory">
          {schoolQualificationsTable()}
        </div>
      </form>
    </>
  );
}
export default EditProfile;