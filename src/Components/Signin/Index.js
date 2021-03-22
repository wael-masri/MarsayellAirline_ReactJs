import React,{useEffect, useState} from 'react'
import './Style.css'
import * as Yup from 'yup';
import { Formik , Form , Field, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom';
import Title from '../Title/Index';
import { login } from '../../Containers/Utils';

 const Signinbasic = (props) => {
   
 const [ istog , setIstog] = useState(false); 
const [info , setInfo] = useState({}); 

useEffect( async () => {
 const object = await JSON.parse(localStorage.getItem('register'));
 setInfo(object);

}, [])




if(istog){
  return <Redirect to='/Admin' />
}







//validation for form 
const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('required !'),
    password: Yup.string()
      
      .required('required !'),

  })


      //form input
    const formik = () => {
        return(
        <div className='row big_div_signin' id='signin'>
                <div className='col-md-6'>
                  <h4 className='h4_left_signin'>Login Now</h4>
                  <p className='p_left_signin'>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                      sint occaecat cupidatat non proident, sunt in culpa
                      qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div>
                        <a href="#" className="fa fa-facebook fb_signin"></a>
                        <a href="#" className="fa fa-twitter fb_signin"></a>
                        <a href="#" className="fa fa-instagram fb_signin"></a>
                  </div>
                </div>
            <div  className='form_signin_big_div col-md-6' >
            
                <Form >
                    <div className='row'>
                          <div className='col'>
                                <label className='mt-3 label_signin'>email</label>
                                <Field type='email' placeholder='Write your email..' className='form-control input_signin ' name='email'  />
                                <ErrorMessage component='div' name='email' className='erorr' />
                          </div>
                          <div className='col'>
                                <label className='mt-3 label_signin'>Phone</label>
                                <Field  type='password' placeholder='*******'  className='form-control input_signin ' name='password' />
                                <ErrorMessage component='div' name='password' className='erorr' />
                          </div>
                    </div>
         
                    <button className='mb-3 mt-3 btn btn_signin_form' type="submit">Login</button>
                    <button className='mb-3 mt-3 btn btn_signin_form ml-3' type="reset">Reset</button>
                </Form>
            </div>
        </div>
        )
      }
   
   
     
    
   //submit form 
const formsub = (values,action) => {
    console.log(values);
    

     
    if(info == null){
      alert("Email and password not correct !!");
    }else{
        let emailinput = values.email;
        let passwordinput = values.password;
        if((emailinput == info.email) && (passwordinput == info.password)){
          login();
          setIstog(true);
          window.location.reload();

        
        }else{
          alert("Email2 and password not correct !!");
        }
    }
    
    action.resetForm();
    
    
  }
   
 
   
   
   
    return (
        <div className='container'>
          <Title title='Sign In'  />
          <div className='div_first_signin' >
              <p className='p_in_first_signin'>If you do not have an account with us, please scroll down</p>
      
          </div>
          <Formik
        initialValues={ {email : '' , password : '' } }
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

export default Signinbasic;
