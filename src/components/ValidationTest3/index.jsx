import { useState } from "react";
import { Validation } from "./Validation";

const fieldNames = [
  { name: "firstName", label: "First Name:", type: "text" },
  { name: "lastName", label: "Last Name:", type: "text" },
  { name: "email", label: "Email:", type: "email" },
  { name: "password", label: "Password:", type: "password" },
  { name: "confirmPassword", label: "Confirm Password:", type: "password" },
  { name: "birthday", label: "Birthday:", type: "date" },
];

export const ValidationTest3 = () => {
  const [formInp, setFormInp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInp((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "password") {
      setFormInp((prevState) => ({
        ...prevState,
        confirmPassword: value,
      }));
    }

    const errorMessage = Validation({ [name]: value });
    setErrors((prevState) => ({
      ...prevState,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      {fieldNames.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formInp[field.name]}
            onChange={handleInputChange}
          />
          {errors[field.name] && <p>{errors[field.name]}</p>}
        </div>
      ))}

      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
};