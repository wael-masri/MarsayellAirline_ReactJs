import React from 'react'


//component
import Signinbasic from '../Components/Signin/Index';
import Signupbasic from '../Components/Signup/Index'
const Signin = (props) => {
    return (
        <div>
           <Signinbasic {...props} />
           <Signupbasic />
        </div>
    )
}

export default Signin
