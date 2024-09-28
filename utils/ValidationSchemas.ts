import * as yup from "yup"

export const loginSchama = yup.object().shape({
    email:yup
    .string()
    .email("Enter a valid email address.")
    .required("Email address is required."),
    password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
})