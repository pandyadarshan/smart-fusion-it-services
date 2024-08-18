import React, { useState } from "react";
import Select from "react-select";
import useCustomNavigation from "../../../hooks/useCustomNavigation";
import PrimaryButton from "../PrimaryButton";

const shiftOptions = [
  { value: "day", label: "Day" },
  { value: "night", label: "Night" },
];

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);

const HireForm = () => {
  const { params } = useCustomNavigation();

  const [formData, setFormData] = useState({
    position: params.developer || "",
    email: "",
    contactNumber: "",
    shift: null,
    moreInfo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: value };
      const newErrors = { ...errors, [name]: validateField(name, value) };
      setErrors(newErrors);
      return newFormData;
    });
  };

  const handleSelectChange = (selectedOption) => {
    const name = "shift";
    const value = selectedOption;
    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: value };
      const newErrors = { ...errors, [name]: validateField(name, value) };
      setErrors(newErrors);
      return newFormData;
    });
  };
  const validateField = (name, value) => {
    switch (name) {
      case "position":
        return value.trim() === "" ? "Position is required" : "";
      case "email":
        return !validateEmail(value) ? "Valid email is required" : "";
      case "contactNumber":
        return value && !validatePhoneNumber(value)
          ? "Valid contact number is required"
          : "";
      case "shift":
        return value === null ? "" : ""; // Not required
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { position, email, contactNumber, shift, moreInfo } = formData;

    const newErrors = {
      position: validateField("position", position),
      email: validateField("email", email),
      contactNumber: validateField("contactNumber", contactNumber),
      shift: validateField("shift", shift),
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission here
    console.log("Form submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form-container">
      <div className="form-group">
        <label htmlFor="position">Position (Profile):</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className={errors.position ? "input-error" : ""}
        />
        {errors.position && (
          <span className="error-message">{errors.position}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className={errors.contactNumber ? "input-error" : ""}
        />
        {errors.contactNumber && (
          <span className="error-message">{errors.contactNumber}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="shift">Shift:</label>
        <Select
          id="shift"
          options={shiftOptions}
          value={formData.shift}
          onChange={handleSelectChange}
          isClearable
          placeholder="Select shift"
        />
        {errors.shift && <span className="error-message">{errors.shift}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="moreInfo">More Information about Requirement:</label>
        <textarea
          id="moreInfo"
          name="moreInfo"
          value={formData.moreInfo}
          onChange={handleChange}
        />
      </div>
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </form>
  );
};

export default HireForm;
