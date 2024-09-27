import { useState } from 'react'
import { Input, Button, Grid, ThemeUIStyleObject, Alert } from 'theme-ui'
// import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
// import { Navigate } from "react-router-dom";
import { Form, Formik} from 'formik'
import './login.scss'
import * as Yup from 'yup'
// import { DASHBOARD_PAGE_PATH, SIGN_UP_PAGE_PATH } from '../../config/paths'
import { useAuth } from '../../context/AuthProvider'
import { FormGroup } from '../../components/formGroup/formGroup'
import Lottie from "lottie-react";
import lottieImage from "../../../src/lottie/background.json";
// import { FormWrapper } from '../FormWrapper/FormWrapper'

export interface SignInProps {
  sx?: ThemeUIStyleObject
}

interface SignInFormValues {
  email: string
  password: string
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8).max(200),
})

const SignIn = (): JSX.Element => {
  const { signIn, auth } = useAuth()
  console.log(signIn)
  // const [formSubmitting, setFormSubmitting] = useState<boolean>(false)
  const [formError, setFormError] = useState<string>('')
  // const navigate = useNavigate()
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  return (
    // <FormWrapper title="Welcome back" sx={{ ...sx }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values: SignInFormValues) => {
          // setFormSubmitting(true)
          try {
            signIn(auth, values.email, values.password, );
            setTimeout(navigate, 0, from, { replace: true });
            // <Navigate to="/"/>
            // console.log('you ve logged In')
          } catch (error: unknown) {
            let errorMessage = 'error.unknown'
            if (typeof error === 'string') {
              errorMessage = error.toUpperCase()
            } else if (error instanceof Error) {
              errorMessage = error.message
            }
            setFormError(errorMessage)
          }
        }}
        validationSchema={SignInSchema}
      >
        {({ getFieldProps }) => (

        <div className='login'>
          <div className='lottie'>
          <Lottie animationData={lottieImage} loop={true} />;
          </div>
          <fieldset>
        <legend>Ridesmash </legend>
          <h4>Welcome Back</h4>
          <Form className='formContainer'>
            <FormGroup label="You email address" name="email">
              <Input
                sx={{ borderColor: 'rgb(209, 218, 230)' }}
                {...getFieldProps('email')}
                id="email"
              />
            </FormGroup>
            <FormGroup label="Password" name="password">
              <Input
                sx={{ width: '400px', borderColor: 'rgb(209, 218, 230)' }}
                {...getFieldProps('password')}
                type="password"
                id="password"
              />
            </FormGroup>
            <Grid>
              <Button type="submit" sx={{ mt: 1 }} className='submitBtn'>
                Log in
              </Button>
             
            </Grid>
            <br />
            {formError && <Alert variant="error" className='formError'>{formError}</Alert>}
          </Form>
        </fieldset>  
        </div>      
          
        )}
      </Formik>
    // </FormWrapper>
  )
}

export default SignIn

// import  { useState, useContext} from 'react'
// import './login.scss'
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../firebase'
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';
// import { Link } from 'react-router-dom'


// const Login = () => {

//   const [ error, setError ] = useState(false);
//   const [ email, setEmail ] = useState("");
//   const [ password, setPassword ] = useState("");

//   const navigate = useNavigate()

//   //  const { dispatch, currentUser} = useContext(AuthContext)

//   const handleLogin = (e:any) => { 
    
//       e.preventDefault();

//       signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
        
//          const user = userCredential.user;
//         //  dispatch({type:"LOGIN", payload:user})

//         navigate("/")
        
//       })
//       .catch((error) => {

//         setError(error.message)

        
//       });

//   };
//   return (
//     <div className='login'>
      
//       <fieldset>
//         <legend>Foodmie</legend>

//         <form onSubmit={handleLogin}>
//           <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
//           <input type="password" placeholder='Password'  onChange={e => setPassword(e.target.value)}/>
//           <Link to="/forgotPwd" style={{textDecoration:'none'}}>
//             <div className='forgotPwd'>
//                 <div>Forgot Password</div>
//             </div>
//           </Link>
//           <button type="submit">Login</button>
//           <span>{error && "Wrong email or password"}</span>
//         </form>


//       </fieldset>

//     </div>
//   )
// }

// export default Login
