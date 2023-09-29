import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import "./UserDetails.css";

const UserDetails = ({ formData, setFormData }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const toggle = (field) => {
    if (field === 1) {
      setOpen((prev) => !prev);
      setOpen2(false);
    } else if (field === 2) {
      setOpen2((prev) => !prev);
      setOpen(false);
    }
  };
  // const [err, setErr] = useState("");

  // useEffect(() => {
  //   // Check if passwords match when either password or confirmPassword changes
  //   if (formData.password !== formData.confirmPassword) {
  //     setErr("Passwords do not match.");
  //   } else {
  //     setErr(""); // Reset the error message when passwords match
  //   }
  // }, [formData.password, formData.confirmPassword]);

  return (
    <div>
      <div>
        {/* Input Fields And Properties */}
        {/* FullName Field */}

        <input
          type="text"
          placeholder="Full Name"
          className="mb-4 form-control"
          required="required"
          value={formData.fullName.trim()}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
      </div>

      <div className="input">
        {/* Password Section */}
        <div className="icons">
          {open === false ? (
            <BsEyeFill onClick={() => toggle(1)} />
          ) : (
            <BsEyeSlashFill onClick={() => toggle(1)} />
          )}
        </div>
        <input
          type={open === false ? "password" : "text"}
          placeholder="Password"
          className="mb-4 form-control"
          required="required"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={formData.password.trim()}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <div className="input">
        {/* Confirm Password Section */}
        <div className="icons">
          {open2 === false ? (
            <BsEyeFill onClick={() => toggle(2)} />
          ) : (
            <BsEyeSlashFill onClick={() => toggle(2)} />
          )}
        </div>

        <input
          type={open2 === false ? "password" : "text"}
          placeholder="Confirm Password"
          className="mb-4 form-control"
          required="required"
          value={formData.confirmPassword.trim()}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </div>
      {/* {err && <div className="text-danger">{err}</div>} */}
    </div>
  );
};

export default UserDetails;
