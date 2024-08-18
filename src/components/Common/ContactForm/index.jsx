import React, { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import Select from "react-select";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhoneNumber = (phoneNumber) =>
  /^\+?[1-9]\d{1,14}$/.test(phoneNumber);

const fetchCountries = async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags"
  );
  const data = await response.json();
  return data.map((country) => ({
    value: country.name.common,
    label: (
      <div className="country-option">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="country-flag"
        />
        {country.name.common}
      </div>
    ),
  }));
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phoneNumber: "",
    businessRequirement: "",
  });
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    country: "",
    phoneNumber: "",
    businessRequirement: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    if (
      formData.phoneNumber.trim() &&
      !validatePhoneNumber(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = "Invalid phone number format";
    }

    if (formData.businessRequirement.length > 400) {
      newErrors.businessRequirement =
        "Business Requirement must be less than 400 characters";
    } else if (!formData.businessRequirement.trim()) {
      newErrors.businessRequirement = "Business Requirement is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Trigger validation on change
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Handle form submission
    }
  };

  const handleChangeCountry = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  useEffect(() => {
    const getCountries = async () => {
      const countriesData = await fetchCountries();
      setCountries(countriesData);
    };

    getCountries();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="contact-form-container">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <Select
          id="country"
          options={countries}
          value={selectedCountry}
          onChange={handleChangeCountry}
          isClearable
          placeholder="Select a country"
          maxMenuHeight={250}
        />
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={errors.phoneNumber ? "input-error" : ""}
        />
        {errors.phoneNumber && (
          <span className="error-message">{errors.phoneNumber}</span>
        )}
      </div>

      <div className="form-group">
        <label>Business Requirement:</label>
        <textarea
          name="businessRequirement"
          value={formData.businessRequirement}
          onChange={handleChange}
          maxLength="400"
          className={errors.businessRequirement ? "input-error" : ""}
        />
        {errors.businessRequirement && (
          <span className="error-message">{errors.businessRequirement}</span>
        )}
      </div>

      <PrimaryButton type="submit">Submit</PrimaryButton>
    </form>
  );
};

export default Form;
