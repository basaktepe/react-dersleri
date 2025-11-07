import React from "react";
import { useFormik } from "formik";
import { RegisterFormSchemas } from "../schemas/RegisterFormSchemas";

function RegisterForm() {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: RegisterFormSchemas,
    onSubmit: submit,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Insert your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="input-error">{errors.email}</p>}
        </div>
        <div className="inputDiv">
          <label>Age</label>
          <input
            type="number"
            id="age"
            placeholder="Insert your age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p className="input-error">{errors.age}</p>}
        </div>
        <div className="inputDiv">
          <label>Password</label>
          <input
            type="text"
            id="password"
            placeholder="Insert your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="input-error">{errors.password}</p>}
        </div>
        <div className="inputDiv">
          <label>Retry Password</label>
          <input
            type="text"
            id="confirmPassword"
            placeholder="Insert your password again"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="input-error">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="inputDiv">
          <div className="term">
            <input
              style={{ width: "20px", height: "12px" }}
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
            />

            <label>I accept the user agreement</label>
          </div>
          {errors.term && <p className="input-error">{errors.term}</p>}
        </div>
        <button className="saveButton" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
