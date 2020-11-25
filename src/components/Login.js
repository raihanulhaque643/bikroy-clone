import React from 'react';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
    useHistory
  } from "react-router-dom";

  import { signInWithFacebook } from '../firebase/firebase';
import firebase from "firebase/app";

const Login = () => {
    const history = useHistory();
    // let match = useRouteMatch();

    const handleFacebookButton = (e) => {
      e.preventDefault();
      signInWithFacebook()
    }

    return (
        <div>
        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
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
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
        .then((user) => {
          // Signed in 
          localStorage.setItem('name', user.user.email);
          console.log("Login successful");
          history.push('/');
          window.location.reload();
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error(error.message);
          alert(error.message);
          window.location.reload();
        });
       }}
     >
       {({ isSubmitting }) => (
         <Form>
         <div className="loginFormHolder">
         <div className="inputSection" style={{marginBottom: '0px'}}>
              <div className="fb-login-button">
              <button 
              style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}
              onClick={handleFacebookButton}
              >
              <img src="facebook.svg" style={{height: 'auto', width: '24px'}} alt=""/> Continue with Facebook
              </button>
              </div>
              <h5 style={{color: 'grey', textAlign: 'center', fontSize: '16px', margin: '8px'}}>or</h5>
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
           <button type="submit" disabled={isSubmitting} className="login">
             Login
           </button>
           <h5 style={{textAlign: 'center'}}>Don't have an account yet?</h5>
           <button className="redirectToSignup" onClick={() => {history.push('auth/signup')}} >
             Sign up
           </button>
        </div>
         </Form>
       )}
     </Formik>
        </div>
    )
}

export default Login;
