import React from 'react';
import { useParams } from 'react-router-dom';
import './PostAdForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const PostAdForm = () => {

    let {subcategory} = useParams();

    return (
        <div className="postAdFormContainer">
        <div className="postAdFormBody">
         <div className="postAdFormHeader">
            <div className="postAdHeaderLeft">
              Fill in the details
            </div>
            <div className="postAdHeaderRight">
            <img src="categoryTag.svg" alt=""/>
              {subcategory}
            </div>
         </div>
            <Formik
       initialValues={{ subcategory: subcategory, title: '', description: '', price: '', negotiable: null, contact: '' }}
       validate={values => {
         const errors = {};
         if (!values.title) {
           errors.title = '** Title field can not be empty! **';
         }
         if (!values.description) {
           errors.description = '** Description field can not be empty! **';
         }
         if (!values.price) {
           errors.price = '** Price field can not be empty! **';
         }
         if (!values.contact) {
           errors.contact = '** Contact field can not be empty! **';
         }

         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 6));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className="postAdForm">

            <div className="formFieldGroup">
           <div className="title">Title</div>
           <Field className="field" type="text" name="title" placeholder="Keep it short!" />
           <ErrorMessage style={{color: 'red', fontSize: '12px'}} name="title" component="div" />
           </div>

           <div className="formFieldGroup">
           <div className="description">Description</div>
           <Field className="field textAreaField" component="textarea" name="description" placeholder="More details = more interested buyers!" />
           <ErrorMessage style={{color: 'red', fontSize: '12px'}} name="description" component="div" />
           </div>

           <div className="formFieldGroup">
           <div className="price">Price(Tk.)</div>
           <Field className="field" type="number" name="price" placeholder="Pick a good price - what would you pay?" />
           <ErrorMessage style={{color: 'red', fontSize: '12px'}} name="price" component="div" />
           </div>

           <div className="formFieldGroup">
           <div className="negotiableGroup">
            <Field className="field" type="checkbox" name="negotiable" />
            <div className="negotiable">Negotiable</div>
           </div>
           <ErrorMessage style={{color: 'red', fontSize: '12px'}} name="negotiable" component="div" />
           </div>

           <div className="formFieldGroup">
           <div className="photo">Add photo</div>
           <Field className="field" type="file" name="photo" />
           <ErrorMessage style={{color: 'red', fontSize: '12px'}} name="photo" component="div" />
           </div>

           <div className="formFieldGroup">
           <div className="phoneNumber">Phone number</div>
           <Field className="field" type="text" name="contact" placeholder="Enter phone number" />
           <ErrorMessage style={{color: 'red', fontSize: '12px'}} name="contact" component="div" />
           </div>

            <div className="postAdButtonContainer">
           <button className="postAdButton" type="submit" disabled={isSubmitting}>
             Post Ad
           </button>
           </div>

         </Form>
       )}
     </Formik>
     </div>
        </div>
    )
}

export default PostAdForm;
