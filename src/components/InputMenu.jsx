import React, { useState } from "react";
import "../styles/input-menu.css";
export const InputMenu = ({ handleChange, resumeData }) => {
  return (
    <>
      <div className="input">
        <div className="info">
          <h2>Personal Details</h2>
          <div className="glass-card">
            <div className="input-container">
              <label htmlFor="fullname">FullName</label>
              <input
                type="text"
                name="fullname"
                placeholder="fullname"
                value={resumeData[resumeData.fullname]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.fullname]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={resumeData[resumeData.email]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.email]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="phone"
                value={resumeData[resumeData.phone]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.phone]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                placeholder="linkedin"
                value={resumeData[resumeData.linkedin]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.linkedin]: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="info">
          <h2> Education</h2>
          <div className="glass-card">
            <div className="input-container">
              <label htmlFor="schoolName1">First SchoolName</label>
              <input
                type="text"
                name="schoolName1"
                placeholder="schoolName1"
                value={resumeData[resumeData.schoolName1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.schoolName1]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="courseName1">First School CourseName</label>
              <input
                type="text"
                name="courseName1"
                placeholder="courseName1"
                value={resumeData[resumeData.courseName1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.courseName1]: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-container">
              <label htmlFor="grade1">First School Grade</label>
              <input
                type="text"
                name="grade1"
                placeholder="grade1"
                value={resumeData[resumeData.grade1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.grade1]: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-container">
              <label htmlFor="schoolStartDate1">First School StartDate</label>
              <input
                type="text"
                name="schoolStartDate1"
                placeholder="schoolStartDate1"
                value={resumeData[resumeData.schoolStartDate1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.schoolStartDate1]: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-container">
              <label htmlFor="schoolEndDate1">First School EndDate</label>
              <input
                type="text"
                name="schoolEndDate1"
                placeholder="schoolEndDate1"
                value={resumeData[resumeData.schoolEndDate1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.schoolEndDate1]: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="info">
          <h2>Experience</h2>
          <div className="glass-card">
            <div className="input-container">
              <label htmlFor="positionName1">First PositionName</label>
              <input
                type="text"
                name="positionName1"
                placeholder="positionName1"
                value={resumeData[resumeData.positionName1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.positionName1]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="companyName1">First CompanyName</label>
              <input
                type="text"
                name="companyName1"
                placeholder="companyName1"
                value={resumeData[resumeData.companyName1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.companyName1]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="location1">First Location</label>
              <input
                type="text"
                name="location1"
                placeholder="location1"
                value={resumeData[resumeData.location1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.location1]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="jobStartDate1">First StartDate</label>
              <input
                type="text"
                name="jobStartDate1"
                placeholder="jobStartDate1"
                value={resumeData[resumeData.jobStartDate1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.jobStartDate1]: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-container">
              <label htmlFor="jobEndDate1">First EndDate</label>
              <input
                type="text"
                name="jobEndDate1"
                placeholder="jobEndDate1"
                value={resumeData[resumeData.jobEndDate1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.jobEndDate1]: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-container">
              <label htmlFor="jobBullet1">First JobBullet1</label>
              <input
                type="textbox"
                name="jobBullet1"
                placeholder="jobBullet1"
                value={resumeData[resumeData.jobBullet1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.jobBullet1]: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-container">
              <label htmlFor="jobBullet2">First JobBullet2</label>
              <input
                type="textbox"
                name="jobBullet2"
                placeholder="jobBullet2"
                value={resumeData[resumeData.jobBullet2]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.jobBullet2]: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="info">
          <h2>Projects</h2>
          <div className="glass-card">
            <div className="input-container">
              <label htmlFor="projectName1">ProjectName</label>
              <input
                type="text"
                name="projectName1"
                placeholder="projectName1"
                value={resumeData[resumeData.projectName1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.projectName1]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="projectTools1">Tools</label>
              <input
                type="text"
                name="projectTools1"
                placeholder="projectTools1"
                value={resumeData[resumeData.projectTools1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.projectTools1]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="projectDate">Date</label>
              <input
                type="text"
                name="projectDate"
                placeholder="projectDate"
                value={resumeData[resumeData.projectDate1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.projectDate1]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="projectBullet1">Description Bullet1</label>
              <input
                type="text"
                name="projectBullet1"
                placeholder="projectBullet1"
                value={resumeData[resumeData.projectBullet1]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.projectBullet1]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="projectBullet2">Description Bullet2</label>
              <input
                type="text"
                name="projectBullet2"
                placeholder="projectBullet2"
                value={resumeData[resumeData.projectBullet2]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.projectBullet2]: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="info">
          <h2>Skills</h2>
          <div className="glass-card">
            <div className="input-container">
              <label htmlFor="languages">Languages</label>
              <input
                type="text"
                name="languages"
                placeholder="languages"
                value={resumeData[resumeData.languages]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.languages]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="frameworks">Frameworks</label>
              <input
                type="text"
                name="frameworks"
                placeholder="frameworks"
                value={resumeData[resumeData.frameworks]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.frameworks]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="devTools">DevTools</label>
              <input
                type="text"
                name="devTools"
                placeholder="devTools"
                value={resumeData[resumeData.devTools]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.devTools]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="libraries">Libraries</label>
              <input
                type="text"
                name="libraries"
                placeholder="libraries"
                value={resumeData[resumeData.libraries]}
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [resumeData.libraries]: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
