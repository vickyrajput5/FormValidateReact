import React from 'react'
import './style.css'
import { useFormik } from 'formik'
import { RegistrationSchema } from '../validate'
 
const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
}

const Registration = () => {

    const {values , errors , touched , handleBlur, handleSubmit, handleChange} = useFormik({
        initialValues,
        validationSchema : RegistrationSchema,
        onSubmit: (values, action) =>{
            console.log(values)
            action.resetForm()
        }
    })

  return (
    <>
    <div className="registration">
        <div className="container">
            <div className="register-block">
                <h3>Registration</h3>
                <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name='name' 
                        placeholder="Full Name" 
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    {errors.name && touched.name ? (<p>{errors.name}</p>) : null}
                        <label htmlFor="name">Full Name</label>
                        </div>
                        
                      <div className="form-floating mb-3">
                        <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        name='email' 
                        placeholder="name@example.com" 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                           {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
                        <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input 
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        name='password' 
                        placeholder="Password" 
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                           {errors.password && touched.password ? (<p>{errors.password}</p>) : null}
                        <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating">
                        <input 
                        type="password" 
                        className="form-control" 
                        id="confirmpassword" 
                        name='confirmpassword' 
                        placeholder="Confirm Password" 
                        value={values.confirmpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                           {errors.confirmpassword && touched.confirmpassword ? (<p>{errors.confirmpassword}</p>) : null}
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        </div>
                        
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Registration