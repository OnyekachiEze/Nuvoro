import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import countryStateData from "./countryStateData.json";
import './ApplicationPage.css';

const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    country: "",
    state: "",
    course: "",
    experience: "",
    reason1: "",
    reason2: "",
    agree: false,
  });

  const [states, setStates] = useState([]);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [dobError, setDobError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const courses = [
    "Web Development",
    "UI/UX Design",
    "Product Design",
    "Cloud Computing",
    "Data Science",
    "Mobile App Development",
  ];

  const experienceLevels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Professional",
  ];

  useEffect(() => {
    if (formData.country) {
      setStates(countryStateData[formData.country] || []);
      setFormData((prev) => ({ ...prev, state: "" }));
    }
  }, [formData.country]);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "cv" && files.length > 0) {
      setUploadedFileName(files[0].name);
    }

    if (name === "dob") {
      const age = calculateAge(value);
      if (age < 15) {
        setDobError("You must be at least 15 years old to apply.");
      } else {
        setDobError("");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    for (const field in formData) {
      if (!formData[field] && field !== "cv") {
        errors[field] = true;
      }
    }
    if (calculateAge(formData.dob) < 15) {
      errors.dob = true;
      setDobError("You must be at least 15 years old to apply.");
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill out all required fields.");
      return;
    }

    setShowPopup(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      city: "",
      country: "",
      state: "",
      course: "",
      experience: "",
      reason1: "",
      reason2: "",
      agree: false,
    });
    setUploadedFileName("");
    setDobError("");
    setFormErrors({});
  };

  return (
    <div>
      <Navbar />
      <div className="application-hero-container">
        <div className="application-hero-overlay">
          <h1 className="application-hero-title">
            Apply to Join <br /> Nuvoro Academy
          </h1>
          <p className="application-hero-description">
            Start your journey into tech with hands-on training, real projects,
            and expert mentorship.
          </p>
        </div>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>APPLICATION FORM</h2>
          <p className="subtitle">
            Fill out the form accurately and submit your tech journey starts now
          </p>
        </div>

        <div className="input-grid">
          <p className={`form-text ${formErrors.fullName ? 'error' : ''}`}>Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </p>
          <p className={`form-text ${formErrors.email ? 'error' : ''}`}>Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </p>
          <p className={`form-text ${formErrors.phone ? 'error' : ''}`}>Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </p>
          <p className={`form-text ${formErrors.dob ? 'error' : ''}`}>Date of Birth
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            {dobError && <span className="error-message">{dobError}</span>}
          </p>

          <p className={`form-text ${formErrors.state ? 'error' : ''}`}>
            City
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </p>
          <p className={`form-text ${formErrors.country ? 'error' : ''}`}>
            Country
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              {Object.keys(countryStateData)
                .sort()
                .map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
            </select>
          </p>
          <p className={`form-text ${formErrors.course ? 'error' : ''}`}>
            Course
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </p>
          <p className={`form-text ${formErrors.experience ? 'error' : ''}`}>
            Experience Level
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Select Experience Level</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </p>
        </div>

        <textarea
          name="reason1"
          placeholder="Why do you want to join Nuvoro Academy?"
          value={formData.reason1}
          onChange={handleChange}
          maxLength={200}
        ></textarea>
        <p className="word-limit">200 Words</p>

        <div className="upload-section">
          <label htmlFor="cvUpload" className="upload-button">
            Upload Here
          </label>
          <input
            type="file"
            id="cvUpload"
            name="cv"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <span>(optional)</span>
          {uploadedFileName && <div className="file-name-box">{uploadedFileName}</div>}
        </div>

        <textarea
          name="reason2"
          placeholder="How did you know about Nuvoro Academy? (required)"
          value={formData.reason2}
          onChange={handleChange}
          maxLength={200}
          required
        ></textarea>
        <p className="word-limit">200 Words</p>

        <div className="toggle-section">
          <label className="toggle">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <span className="slider"></span>
          </label>
          <p>I agree to Nuvoro Academy’s terms and privacy policy.</p>
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-modal">
            <h2>Application Submitted!</h2>
            <p>Thank you for applying. We'll get back to you soon.</p>
            <button className="close-popup" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationPage;
