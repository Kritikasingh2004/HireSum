import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import candidatesData from "./candidatesData.json";
import "./Candidate.css";
import Header from "./Header";

const CandidateSearch = () => {
  const initialValues = {
    location: "",
    jobRole: "",
  };

  const handleHire = (candidate) => {
    console.log(`Hiring ${candidate.name}`);
  };

  const validationSchema = Yup.object().shape({
    location: Yup.string().required("Location is required"),
    jobRole: Yup.string().required("Job Role is required"),
  });

  const [filteredCandidates, setFilteredCandidates] = useState([]);

  const onSubmit = (values) => {
    const { location, jobRole } = values;

    // Simulating search functionality by filtering candidates based on location and job role
    const filteredCandidates = candidatesData.filter(
      (candidate) =>
        candidate.location.toLowerCase() === location.toLowerCase() &&
        candidate.jobRole.toLowerCase() === jobRole.toLowerCase()
    );

    setFilteredCandidates(filteredCandidates);
  };

  return (
    <>
      <Header content="LogOut" route="/" add="header" dis="hide" />
      <div className="candidate-search-container">
        <h1 className="candidate-search-heading">Candidate Search</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="candidate-search-form">
            <div className="form-field">
              <label htmlFor="location">Location:</label>
              <Field as="select" name="location" id="location">
                <option value="">Select location</option>
                {Array.from(
                  new Set(candidatesData.map((candidate) => candidate.location))
                ).map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </Field>

              <ErrorMessage
                name="location"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-field">
              <label htmlFor="jobRole">Job Role:</label>
              <Field as="select" name="jobRole" id="jobRole">
                <option value="">Select job role</option>
                {Array.from(
                  new Set(candidatesData.map((candidate) => candidate.jobRole))
                ).map((jobRole) => (
                  <option key={jobRole} value={jobRole}>
                    {jobRole}
                  </option>
                ))}
              </Field>

              <ErrorMessage
                name="jobRole"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" className="submit-button">
              Search
            </button>
          </Form>
        </Formik>

        {filteredCandidates.length > 0 && (
          <div className="filtered-candidates-container">
            <h2 className="filtered-candidates-heading">
              Filtered Candidates:
            </h2>
            <div className="candidate-cont">
              <ul className="candidate-list">
                {filteredCandidates.map((candidate) => (
                  <li key={candidate.id} className="candidate-item">
                    <strong>Name:</strong> {candidate.name},{" "}
                    <strong>Experience:</strong> {candidate.experience},{" "}
                    <strong>Skills:</strong> {candidate.skills.join(", ")}
                    <button
                      className="hire-button"
                      type="button"
                      onClick={() => handleHire(candidate)}
                    >
                      Hire
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CandidateSearch;
