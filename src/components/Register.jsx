import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row, Stack } from 'react-bootstrap'
import logoImage from '../assets/blogfooter.png'
import logo from '../assets/blog.png'
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { CREATE_USER } from '../utils/Query';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../common/Firebase';
import { FcGoogle } from "react-icons/fc";


const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  const [googleUser, setGoogleUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setGoogleUser(user);
    });

    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();
  const [createUser, { loading, error, data }] = useMutation(CREATE_USER);

  const handleUserData = (e, name) => {
    const value = e?.target?.value;

    setUserData({
      ...userData,
      [name]: value
    })
  }


  const handleCreateUser = async () => {
    try {
      userData.authMethod = "email";
      const { data } = await createUser({ variables: { userNew: userData } });
      navigate('/login')
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      const { displayName, email } = user || {}
      const nameParts = displayName.split(" ");
      const firstName = nameParts?.[0];
      const lastName = nameParts?.slice(1)?.join(" ");

      try {
        const { data } = await createUser({
          variables: {
            userNew: {
              firstName, lastName, email, password: "",
              authMethod: "google"
            }
          }
        });
        navigate('/login')
      } catch (error) {
        console.error('Error creating user:', error);
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <Container className='login-page'>
      <Row>
        <Col md={6} className='login-left-col'>
          <div className='left-div'>
            <div>
              <h1 className='login-title'>
                The Ultimate Management and Payment Software for your Family Service Business.

              </h1>
            </div>
            <div>
              <img src={logoImage} />
            </div>
          </div>
        </Col>
        <Col md={6} className='login-right-col'>
          <div className='right-div'>
            <div className='login-logo'>
              <img src={logo} />
            </div>
            <div className='sign-in'>
              SIGN UP
            </div>
            <div className='login-form'>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='form-label'>FirstName<span className='required'>*</span></Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FaRegUser color='#278378' /></InputGroup.Text>
                    <Form.Control onChange={(e) => handleUserData(e, 'firstName')} value={userData?.firstName} className='login-input' type="text" placeholder="Enter First Name" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='form-label'>LastName<span className='required'>*</span></Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FaRegUser color='#278378' /></InputGroup.Text>
                    <Form.Control onChange={(e) => handleUserData(e, 'lastName')} value={userData?.lastName} className='login-input' type="text" placeholder="Enter Last Name" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='form-label'>Email<span className='required'>*</span></Form.Label>
                  <InputGroup>
                    <InputGroup.Text><MdOutlineAttachEmail color='#278378' /></InputGroup.Text>
                    <Form.Control onChange={(e) => handleUserData(e, 'email')} value={userData?.email} className='login-input' type="email" placeholder="Enter Email" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className='form-label'>Password<span className='required'>*</span></Form.Label>
                  <InputGroup>
                    <InputGroup.Text><RiLockPasswordLine color='#278378' /></InputGroup.Text>
                    <Form.Control onChange={(e) => handleUserData(e, 'password')} value={userData?.password} className='login-input' placeholder='Enter Password' type="password" />
                  </InputGroup>
                </Form.Group>
              </Form>
            </div>
            <div className='login-forgot-password'>
              <div>
                <div>
                  <Form>
                    <div className="mb-3">
                      <Form.Check
                        className='remember-me'
                        type={"checkbox"}
                        id={`default-checkbox`}
                        label={`Terms and conditions`}
                      />
                    </div>
                  </Form>
                </div>

              </div>

            </div>
            <div className='login-form-btn'>
              <Button onClick={() => handleCreateUser()} color='#278378' className='signin-btn'>Sign Up</Button>
            </div>
            <div className='login-continue'>
              or continue with
            </div>
            <div className='login-form-btn'>
              {googleUser ? (
                <div onClick={() => handleSignUpWithGoogle()} className='sign-up-acc-btn'>
                  <div className='user-details'>
                    <div>
                      <img className='google-icon-img' src={googleUser?.photoURL} />
                    </div>
                    <div>
                      <div className='continue-text-user'>continue as a {googleUser?.displayName}</div>
                      <div className='user-email-text'>{googleUser?.email}</div>
                    </div>
                  </div>
                  <div>
                    <span className='google-icon'><FcGoogle /></span>
                  </div>
                </div>
              ) : (
                <Button onClick={() => handleSignUpWithGoogle()} className='signup-btn-google'>
                  <span className='google-icon'><FcGoogle /></span>
                  <span className='continue-text'>Continue as Google</span>
                </Button>
              )}

            </div>
            <div className='login-continue'>
              Already have an account? <span className='login-signup-text'><a href='/login'>
                SignIn
              </a></span>
            </div>
          </div>

        </Col>
      </Row >



    </Container >
  )
}

export default Register
