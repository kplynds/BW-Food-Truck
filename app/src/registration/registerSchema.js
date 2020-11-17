import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(8, "username must be 8 characters"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "password must be 8 characters"),
  first_name: yup
    .string()
    .required("first name is required")
    .min(3, "first name must be 3 characters"),
  last_name: yup
    .string()
    .required("last name is required")
    .min(3, "last name must be 3 characters"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
});
