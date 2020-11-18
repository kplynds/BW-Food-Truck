import * as yup from "yup";

const formSchema = yup.object().shape({
  roleId: yup.string().required("must select a role"),
  username: yup
    .string()
    .required("username is required")
    .min(8, "username must be 8 characters"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "password must be 8 characters"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
});

export default formSchema;
