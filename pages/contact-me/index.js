import React,{ useEffect, useState} from 'react'
import { Formik } from 'formik';
import * as Yup from "yup";
import cogoToast from 'cogo-toast';
 
const contactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(1)
    .required("Please enter your full name"),
  email: Yup.string()
    .email("Please enter your valid email")
    .required("Please enter your valid email"),
  message: Yup.string()
    .min(20, "Please enter minimum 20 letter message")
    .required("Please enter your message")
});

const ContactMe = () => {
const [loading, setLoading] = useState(false)

const handleSubmit = (e, resetForm) => {
        setLoading(true)
    const requestOptions = {
        method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({fullName: e.fullName, email: e.email, message: e.message})  
    };

    fetch(`${process.env.REQUIEST_URL}api/user/send`, requestOptions)
      .then(async res => {
        console.log(res, 'res')
        if(res.ok){
          setLoading(false)
          resetForm()
          return cogoToast.success('Your request has been submitted successfully');
        }
        else{
          setLoading(false)
          return cogoToast.error(res.statusText || "Some thing went wrong");
        }
      })
    }

    return(
        <div className="container d-flex justify-content-center" style={{marginTop: '6rem'}}>
        <div className="form-box shadow p-5">
        <div className="row">
            <Formik
            initialValues={{
                fullName: "",
                email: "",
                message: ""
            }}
            validationSchema={contactSchema}
            onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
          >
          {({ errors, handleSubmit, handleChange, values, isSubmitting, resetForm, }) => (
            <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="col-12 mb-3">
                <input 
                    id="fullName"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    type="text" 
                    style={{borderColor: errors.fullName ? 'red' : 'lightgray'}}
                    className={`form-control is-invalid ${errors.fullName && 'error-appear'}`} 
                    placeholder="Full Name" 
                />
                <div className="invalid-feedback">
                    {errors.fullName}
                </div>
            </div>

            <div className="col-12 mb-3">
                <input 
                    style={{borderColor: errors.email ? 'red' : 'lightgray'}}
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    type="email" 
                    className={`form-control is-invalid ${errors.email && 'error-appear'}`} 
                    placeholder="name@example.com" 
                />
                <div className="invalid-feedback">
                    {errors.email}
                </div>
            </div>

            <div className="col-12 mb-3">
                <textarea 
                    type="text"
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    style={{borderColor: errors.message ? 'red' : 'lightgray'}}
                    className={`form-control is-invalid ${errors.message && 'error-appear'}`} 
                    placeholder="Message"
                    rows="10"
                ></textarea>
                <div className="invalid-feedback">
                    {errors.message}
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-secondary w-75 fs-5 shadow-sm" disabled={loading && 'disabled'} >{loading ? 
                <div className="spinner-border" role="status">
                </div> : "Send" }</button>
            </div>
            </form>
            )}
            </Formik>
            </div>
        </div>
        </div>
    )
}

export default ContactMe