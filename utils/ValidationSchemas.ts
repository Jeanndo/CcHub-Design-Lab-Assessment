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

export const patientInfoSchama = yup.object().shape({
    hospitalId:yup
    .string()
    .required("Hospital ID is required."),
    firstName: yup
    .string()
    .required("FirstName is required."),
    lastName: yup
    .string()
    .required("LastName is required."),
    gender: yup
    .string()
    .required("Gender is required."),
    phone: yup
    .string()
    .required("Phone is required."),
    email:yup
    .string()
    .email("Enter a valid email address.")
    .required("Email address is required."),
})

export const deliveryInfoSchama = yup.object().shape({
    nextDeliveryDate:yup
    .string()
    .required("Next Delivery Date is required."),
    deliveryArea: yup
    .string()
    .required("Delivery Area is required."),
    deliveryAddress: yup
    .string()
    .required("Delivery Address is required."),
    paymentStatus: yup
    .string()
    .required("Payment Status is required."),
})