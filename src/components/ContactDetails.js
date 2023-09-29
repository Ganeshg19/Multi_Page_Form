import React, { useEffect, useState } from "react";
import "./ContactDetails.css";

const ContactDetails = ({ formData, setFormData }) => {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [username, setUsername] = useState("");

  // Function to handle changes in the email field
  const handleEmailChange = (email) => {
    setUsername(email.split("@")[0]);
    setSelectedDomain(email.split("@")[1]);
  };

  // Load form data from sessionStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
      handleEmailChange(parsedData.email);
    }
  }, [setFormData]);

  // Update sessionStorage when form data changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const emailDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "aol.com",
  ];

  // Validation Phone Number And Dont Allow To Type Other Keys

  const validateKeyPress = (event) => {
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Backspace",
      "Delete",
      // "ArrowLeft",
    ];
    const keyPressed = event.key;

    if (!allowedKeys.includes(keyPressed)) {
      event.preventDefault();
      return;
    }

    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^\d]/g, ""); // Remove non-numeric characters

    if (
      numericValue.length >= 10 &&
      keyPressed !== "Backspace" &&
      keyPressed !== "Delete"
    ) {
      event.preventDefault();
    }
  };

  const validateKeyPress2 = (event) => {
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      ".",
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
    ];
    const keyPressed = event.key;

    const regex = /^[a-zA-Z0-9]+$/; // Regular expression to allow only letters and numbers

    if (!allowedKeys.includes(keyPressed) || !regex.test(keyPressed)) {
      event.preventDefault();
    }
  };

  return (
    <div className="contact">
      {/* Input Fields And Properties */}
      {/* User Name Details */}
      <div>
        <input
          type="text"
          placeholder="User Name"
          className="mb-4 form-control"
          required="required"
          value={formData.userName.trim()}
          onKeyDown={validateKeyPress2}
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
            handleEmailChange(e.target.value);
            setFormData({
              ...formData,
              email: `${e.target.value}@${selectedDomain}`,
            });
            setFormData({ ...formData, userName: e.target.value });
          }}
        />
      </div>
      {/* EmailField */}
      <div>
        <div className="select-container">
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={formData.userName}
              disabled
              onChange={(e) => {
                e.preventDefault();
                setSelectedDomain(e.target.value);
                setFormData({
                  ...formData,
                  email: `${username}@${e.target.value}`,
                });
              }}
              // onChange={(e) => {
              //   e.preventDefault();
              //   setUsername(e.target.value);
              //   handleEmailChange(e.target.value);
              //   setFormData({
              //     ...formData,
              //     email: `${e.target.value}@${selectedDomain}`,
              //   });
              // }}
            />
            <span className="input-group-text">@</span>

            <select
              className="form-control selection"
              value={selectedDomain}
              onChange={(e) => {
                e.preventDefault();
                setSelectedDomain(e.target.value);
                setFormData({
                  ...formData,
                  email: `${username}@${e.target.value}`,
                });
              }}
            >
              <option value="">Domains</option>
              {emailDomains.map((domain, index) => (
                <option key={index} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>
          <div className="arrow-down1"></div>
        </div>
        {/* <p>Your email: {formData.email}</p> */}
      </div>

      {/* Phone Number Details */}
      <div>
        <input
          type="text"
          placeholder="Phone number"
          className="mb-4 form-control"
          required="required"
          onKeyDown={validateKeyPress}
          // pattern="[0-9]{10}"
          maxLength={10}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
    </div>
  );
};

export default ContactDetails;
