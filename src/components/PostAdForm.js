import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './PostAdForm.css';
import { Formik, Form, Field, ErrorMessage, setFieldValue } from 'formik';
import {uploadImageAsync} from '../features/ads/adsSlice.js';


const PostAdForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    let {subcategory} = useParams();
    let {category} = useParams();

    return (
        <div className="postAdFormContainer">
        <div className="postAdFormBody">
         <div className="postAdFormHeader">
            <div className="postAdHeaderLeft">
              Fill in the details
            </div>
            <div className="postAdHeaderRight">
              {subcategory}
            </div>
         </div>
            <Formik
       initialValues={{ category: category, subcategory: subcategory, title: '', description: '', price: '', negotiable: '', photo: '', contact: '', city: 'Dhaka' }}
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
         if (!values.city) {
           errors.city = '** City field can not be empty! **';
         }

         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         dispatch(uploadImageAsync(values));
         history.push('/all-ads');
       }}
     >
       {({ isSubmitting, setFieldValue }) => (
         <Form className="postAdForm">

            <div className="formFieldGroup">
           <div className="title">City</div>
           <Field className="field" as="select" name="city" style={{width: '100%'}}>
              <option value="Dhaka">Dhaka</option>
              <option value="chattogram">Chattogram</option>
              <option value="sylhet">Sylhet</option>
              <option value="khulna">Khulna</option>
              <option value="barishal">Barishal</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensignh">Mymensingh</option>
           </Field>
           <ErrorMessage style={{color: 'red', fontSize: '12px'}} name="city" component="div" />
           </div>

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
           <input className="field" type="file" name="photo" 
           accept="image/x-png,image/gif,image/jpeg"
           onChange={(event) => {
             setFieldValue('photo', event.currentTarget.files[0]);
           }}
            />
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
