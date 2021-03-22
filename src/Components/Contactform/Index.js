import React from 'react'
import './Style.css';
import AOS from 'aos';
import * as Yup from 'yup';
import { Formik , Form , Field, ErrorMessage } from 'formik';

const Contactfrom = () => {
  AOS.init({
    duration: 2000,
  })  
 
//validation for form 
const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required !'),
    phone: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required !'),
    email: Yup.string()
      .email('Email is invalid')
      .required('required !'),
    message: Yup.string()
      .max(15, 'Must be 15 characters or then')
      .required('required !'),

  })
  
  
  
  
    //form input
    const formik = () => {
      return(
      <div className='row big_div_contactform'>
              <div class='col-md-6' data-aos="fade-right">
                <h4 className='h4_left_contact'>Contact Us</h4>
                <p className='p_left_contact'>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </p>
                <div>
                      <a href="#" className="fa fa-facebook fb_contact"></a>
                      <a href="#" className="fa fa-twitter fb_contact"></a>
                      <a href="#" className="fa fa-instagram fb_contact"></a>
                </div>
              </div>
          <div  className='form_contact_big_div col-md-6' data-aos="fade-left">
          
              <Form >
                  <div className='row'>
                        <div className='col'>
                              <label className='mt-3 label_contact'>Name</label>
                              <Field type='text' placeholder='Write your name..' className='form-control input_contact ' name='name'  />
                              <ErrorMessage component='div' name='name' className='erorr' />
                        </div>
                        <div className='col'>
                              <label className='mt-3 label_contact'>Phone</label>
                              <Field  type='number' placeholder='Write your number..'  className='form-control input_contact ' name='phone' />
                              <ErrorMessage component='div' name='phone' className='erorr' />
                        </div>
                  </div>
                  

                  <label className='mt-3 label_contact'>Email</label>
                  <Field type='email' placeholder='Write your email..'  className='form-control input_contact ' name='email' />
                  <ErrorMessage component='div' name='email' className='erorr' />
                  
                  <label className='mt-3 label_contact'>Message</label>
                  <Field as="textarea" type='textarea' placeholder='Write your message..'  className='form-control input_contact ' name='message'   />
                  <ErrorMessage component='div' name='message' className='erorr' />

                  <button className='mb-3 mt-3 btn btn_contact_form' type="submit">Send</button>
                  <button className='mb-3 mt-3 btn btn_contact_form ml-3' type="reset">Reset</button>
              </Form>
          </div>
      </div>
      )
    }
  
//submit form 
const formsub = (values) => {
  console.log(values);
}
   
    
    //running
    return (
  
        <Formik
        initialValues={ {name : '' , phone : '' , email : '',message : '' } }
        onSubmit={formsub}
        render={formik}
        validationSchema={validate}
        />
    );
}

export default Contactfrom
