import * as Yup from 'yup'

export const RegistrationSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please Enter Your Name!"),
    email: Yup.string().email().required("Please Enter Your Email!"),
    password: Yup.string().min(6).required("Please Enter Your Password!"),
    confirmpassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Password not match" )
})
