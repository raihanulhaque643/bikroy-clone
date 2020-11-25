import React from 'react';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";

const Signup = () => {
    const history = useHistory();

     const signUpWithEmailAndPassword = (email, password) => { firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in 
        console.log("Sign up successful");
        alert("Sign up successful");
        history.push('/auth');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(error.message);
        alert(error.message)
        // ..
      });
    }

    return (
        <div>
            <Formik
       initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
       validate={values => {
         const errors = {};
        if (!values.name) {
           errors.name = 'Name is required';
        }

         if (!values.email) {
           errors.email = 'Email is required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }

         if (!values.password) {
             errors.password = "Password can not be empty"
         } else if (values.password.length < 6) {
            errors.password = "Password must be greater than 6 characters"
         }

         if (!values.confirmPassword) {
             errors.confirmPassword = "Confirm password can not be empty"
         } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords do not match"
         } 

         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        signUpWithEmailAndPassword(values.email, values.password)
       }}
     >
       {({ isSubmitting }) => (
         <Form>
         <div className="loginFormHolder">
         <div className="inputSection">
            <span style={{marginBottom: '6px'}}>Name</span>
            <Field 
            type="name" 
            name="name" 
            placeholder="Name" />
           <ErrorMessage name="name" component="div" style={{color: 'red', fontSize: '14px'}}/>
         </div>
         <div className="inputSection">
            <span style={{marginBottom: '6px'}}>Email</span>
            <Field 
            type="email" 
            name="email" 
            placeholder="Email" />
           <ErrorMessage name="email" component="div" style={{color: 'red', fontSize: '14px'}}/>
         </div>
         <div className="inputSection">
         <span style={{marginBottom: '6px'}}>Password</span>
         <Field type="password" name="password" placeholder="Password" />
           <ErrorMessage name="password" component="div" style={{color: 'red', fontSize: '14px'}} />
         </div>
         <div className="inputSection">
         <span style={{marginBottom: '6px'}}>Confirm Password</span>
         <Field type="password" name="confirmPassword" placeholder="Confirm password" />
           <ErrorMessage name="confirmPassword" component="div" style={{color: 'red', fontSize: '14px'}} />
         </div>
           <button type="submit" disabled={isSubmitting} className="login" >
             Sign up
           </button>
           <ErrorMessage name="signup" component="div" style={{color: 'red', fontSize: '14px'}} />
           <h5 style={{textAlign: 'center'}}>Already have an account?</h5>
           <button className="redirectToSignup" onClick={() => {history.push('auth')}} >
            Login
           </button>
        </div>
         </Form>
       )}
     </Formik>
        </div>
    )
}

export default Signup;
