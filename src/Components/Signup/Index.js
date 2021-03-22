import React,{Fragment} from 'react'
import './Style.css'
import * as Yup from 'yup';
import { Formik , Form , Field, ErrorMessage } from 'formik';
//component
import Title from '../Title/Index';
const Signupbasic = () => {
   
   


//validation for form 
const validate = Yup.object({
   
    
    name: Yup.string()
      
        .required('required !'),
    phone: Yup.string()
      
        .required('required !'),
    email: Yup.string()
        .email('Email is invalid')
        .required('required !'),
    dateofbirth: Yup.string()
      
        .required('required !'),
    
    password: Yup.string()
      
       .required('required !'),
  })


      //form input
    const formik = () => {
        return(
        <div className='row big_div_signup'>
                <div className='col-md-6'>
                  <h4 className='h4_left_signup'>Signup Now</h4>
                  <p className='p_left_signup'>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                      sint occaecat cupidatat non proident, sunt in culpa
                      qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div>
                        <a href="#" className="fa fa-facebook fb_signup"></a>
                        <a href="#" className="fa fa-twitter fb_signup"></a>
                        <a href="#" className="fa fa-instagram fb_signup"></a>
                  </div>
                </div>
            <div  className='form_signup_big_div col-md-6' >
            
                <Form >
                    <div className='row'>
                          <div className='col'>
                                <label className='mt-3 label_signup'>Name</label>
                                <Field type='text' placeholder='Write your name..' className='form-control input_signup ' name='name'  />
                                <ErrorMessage component='div' name='name' className='erorr' />
                          </div>
                          <div className='col'>
                                <label className='mt-3 label_signup'>Phone</label>
                                <Field  type='number' placeholder='Write your number'  className='form-control input_signup ' name='phone' />
                                <ErrorMessage component='div' name='phone' className='erorr' />
                          </div>
                    </div>

                    <div className='row'>
                          <div className='col'>
                                <label className='mt-3 label_signup'>email</label>
                                <Field type='email' placeholder='Write your email..' className='form-control input_signup ' name='email'  />
                                <ErrorMessage component='div' name='email' className='erorr' />
                          </div>
                          <div className='col'>
                                <label className='mt-3 label_signup'>Date of birth</label>
                                <Field  type='date' placeholder=''  className='form-control input_signup ' name='dateofbirth' />
                                <ErrorMessage component='div' name='dateofbirth' className='erorr' />
                          </div>
                    </div>

                    <div className='row'>
                          <div className='col'>
                                <label className='mt-3 label_signup'>password</label>
                                <Field type='password' placeholder='*******' className='form-control input_signup ' name='password'  />
                                <ErrorMessage component='div' name='password' className='erorr' />
                          </div>
                          
                    </div>
         
                    <button className='mb-3 mt-3 btn btn_signup_form'  type="submit">Sign Up</button>
                    <button className='mb-3 mt-3 btn btn_signup_form ml-3' type="reset">Reset</button>
                </Form>
            </div>
        </div>
        )
      }
   
   
   
   //submit form 
const formsub = (values,action) => {
    console.log(values);
    localStorage.setItem('register', JSON.stringify(values));
    action.resetForm();
    window.location.reload();
   
  }
   
  
    

   
   
   
    return (
        <div className='container space_signup_bottom'>
          <Title title='Sign Up'  />
          <div className='div_first_signup' >
              <p className='p_in_first_signup'>If you do have an account with us, please scroll up</p>
      
          </div>
          <Formik
        initialValues={ {name : '' , phone : '',email : '',dateofbirth : '' ,password : '' } }
        onSubmit={formsub}
        render={formik}
        validationSchema={validate}
        />
          


          <br />
          <br />
          <br />
        </div>
    )
}

export default Signupbasic