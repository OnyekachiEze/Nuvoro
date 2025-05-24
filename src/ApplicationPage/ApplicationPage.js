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
  const [ageError, setAgeError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

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
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "cv" && files.length > 0) {
      setUploadedFileName(files[0].name);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "dob") {
      const age = calculateAge(value);
      if (age < 15) {
        setAgeError("You must be at least 15 years old to apply.");
      } else {
        setAgeError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const age = calculateAge(formData.dob);
    if (age < 15) {
      setAgeError("You must be at least 15 years old to apply.");
      return;
    }

    if (formData.reason1.trim().length < 200) {
      alert("Please enter at least 200 characters for why you want to join Nuvoro Academy.");
      return;
    }
    if (formData.reason2.trim().length > 200) {
      alert("Please enter at least 200 characters how you heard about Nuvoro Academy.");
      return;
    }

    if (!formData.agree) {
      alert("You must agree to the terms and privacy policy.");
      return;
    }

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
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
    }, 3000);
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
          <p className='form-text'>Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </p>
          <p className='form-text'>Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </p>
          <p className='form-text'>Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </p>
          <p className='form-text'>Date of Birth
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            {ageError && <span className="error-message">{ageError}</span>}
          </p>

          <p className='form-text'>
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
          <p className='form-text'>
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
          <p className='form-text'>
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
          <p className='form-text'>
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
          className={formData.reason1.trim().length < 200 ? "textarea-error" : ""}
          maxLength={900}
          required
        ></textarea>
        <p className="word-limit">
          {formData.reason1.trim().length} /  (minimum 200)
        </p>
        {formData.reason1.trim().length > 0 && formData.reason1.trim().length < 200 && (
          <p className="error-message">Please enter at least 200 characters.</p>
        )}




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
          <span className='form-text'>(optional)</span>

          {uploadedFileName && (
            <div className="file-name-box">
              {uploadedFileName}
            </div>
          )}
        </div>
        <textarea
          name="reason2"
          placeholder="How did you know about Nuvoro Academy? (required)"
          value={formData.reason2}
          onChange={handleChange}
          className={formData.reason2.trim().length < 200 ? "textarea-error" : ""}
          maxLength={900}
          required
        ></textarea>
        <p className="word-limit">
          {formData.reason2.trim().length} / (minimum 200)
        </p>
        {formData.reason2.trim().length > 0 && formData.reason1.trim().length < 200 && (
          <p className="error-message">Please enter at least 200 characters.</p>
        )}

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
          <p className='form-text'>I agree to Nuvoro Academy’s terms and privacy policy.</p>
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>

      {showPopup && (
        <div className="popup success">
          <div className="popup-content">
            <span className="popup-icon">🎉</span>
            <h3>Form Submitted!</h3>
            <p>Thank you for applying to Nuvoro Academy.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationPage;
