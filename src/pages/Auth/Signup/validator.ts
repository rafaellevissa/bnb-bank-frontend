import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .max(200, "Name must not exceed 200 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .max(200, "Password must not exceed 200 characters")
    .required("Password is required"),
});
