import * as yup from "yup";

export const RegisterFormSchemas = yup.object().shape({
  email: yup.string().email("Not valid e mail").required("E mail is required"),
  age: yup
    .number()
    .positive("Age cannot be negative")
    .integer("Insert an integer")
    .required("Age is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password", yup.password)], "Paswords do not match"),
  term: yup.boolean().required("Please accept the terms"),
});
