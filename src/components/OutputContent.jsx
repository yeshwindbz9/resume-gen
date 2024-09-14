import React from "react";
import "../styles/output-content.css";

const OutputContent = ({ resumeData }) => {
  return (
    <>
      <div class="container" style={{ width: "100%" }}>
        <h1>{resumeData[resumeData.fullname]}</h1>
        <p>
          Email:{" "}
          <a href={"mailto:".concat(resumeData[resumeData.email])}>
            {resumeData[resumeData.email]}
          </a>
        </p>
        <p>Phone: {resumeData[resumeData.phone]}</p>
        <p>
          LinkedIn:{" "}
          <a href={resumeData[resumeData.linkedin]}>
            {resumeData[resumeData.linkedin]}
          </a>
        </p>{" "}
        <br />
        <div class="section">
          <h2>Education</h2>
          <ul>
            <li>
              <h3>{resumeData[resumeData.schoolName1]}</h3>
              <p>
                {resumeData[resumeData.courseName1]},{" "}
                {resumeData[resumeData.grade1]}
              </p>
              <p>
                {resumeData[resumeData.schoolStartDate1]} -{" "}
                {resumeData[resumeData.schoolEndDate1]}
              </p>
            </li>
          </ul>
        </div>
        <div class="section">
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>{resumeData[resumeData.positionName1]}</h3>
              <p>
                {resumeData[resumeData.companyName1]},{" "}
                {resumeData[resumeData.location1]}
              </p>
              <p>
                {resumeData[resumeData.jobStartDate1]} -{" "}
                {resumeData[resumeData.jobEndDate1]}
              </p>
              <ul>
                <li>{resumeData[resumeData.jobBullet1]}</li>
                <li>{resumeData[resumeData.jobBullet2]}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="section">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>{resumeData[resumeData.projectName1]}</h3>
              <p>Tools: {resumeData[resumeData.projectTools1]}</p>
              <p>{resumeData[resumeData.projectDate]}</p>
              <ul>
                <li>{resumeData[resumeData.projectBullet1]}</li>
                <li>{resumeData[resumeData.projectBullet2]}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="section">
          <h2>Skills</h2>
          <ul>
            <li>Languages: {resumeData[resumeData.languages]}</li>
            <li>Frameworks: {resumeData[resumeData.frameworks]}</li>
            <li>Dev Tools: {resumeData[resumeData.devTools]}</li>
            <li>Libraries: {resumeData[resumeData.libraries]}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OutputContent;
