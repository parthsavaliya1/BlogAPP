import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row, Stack } from 'react-bootstrap'
import logoImage from '../assets/blogfooter.png'
import logo from '../assets/blog.png'
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LOGIN_USER } from '../utils/Query';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../common/Firebase';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [googleUser, setGoogleUser] = useState(null);
    const { setUser } = useContext(AuthContext)
    const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setGoogleUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleUserData = (e, name) => {
        const value = e?.target?.value;

        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleLoginUser = async () => {
        try {
            userData.authMethod="email";
            const { data } = await loginUser({ variables: { userSignIn: userData } });
            const { signInUser } = data || {}
            localStorage.setItem('user', JSON.stringify(signInUser))
            setUser(signInUser)
            navigate('/admin/dashboard')
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const { user } = await signInWithPopup(auth, provider);
            const {email} = user || {}
            setGoogleUser(user);
            const { data } = await loginUser({ variables: { userSignIn: {
                email,
                password:"",
                authMethod:"google"
            } } });
            const { signInUser } = data || {}
            localStorage.setItem('user', JSON.stringify(signInUser))
            setUser(signInUser)
            navigate('/admin/dashboard')
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
                            SIGN IN
                        </div>
                        <div className='login-form'>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='form-label'>Email<span className='required'>*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text><MdOutlineAttachEmail color='#278378' /></InputGroup.Text>
                                        <Form.Control value={userData?.email} onChange={(e) => handleUserData(e, 'email')} className='login-input' type="email" placeholder="Enter Email" />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='form-label'>Password<span className='required'>*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text><RiLockPasswordLine color='#278378' /></InputGroup.Text>
                                        <Form.Control value={userData?.password}
                                            onChange={(e) => handleUserData(e, 'password')} className='login-input' placeholder='Enter Password' type="password" />
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
                                                label={`Remember me`}
                                            />
                                        </div>
                                    </Form>
                                </div>

                            </div>
                            <div className='forgot-password'>
                                Forgot Password?
                            </div>
                        </div>
                        <div className='login-form-btn'>
                            <Button color='#278378' onClick={() => handleLoginUser()} className='signin-btn'>Sign In</Button>
                        </div>
                        <div className='login-continue'>
                            or continue with
                        </div>
                        <div className='login-form-btn'>
                            {googleUser ? (
                                <div onClick={() => handleSignInWithGoogle()} className='sign-up-acc-btn'>
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
                                <Button onClick={() => handleSignInWithGoogle()} className='signup-btn-google'>
                                    <span className='google-icon'><FcGoogle /></span>
                                    <span className='continue-text'>Continue as Google</span>
                                </Button>
                            )}
                        </div>
                        <div className='login-continue'>
                            Don't you have an account? <span className='login-signup-text'><a href='/register'>SignUp
                            </a></span>
                        </div>
                    </div>

                </Col>
            </Row>



        </Container>
    )
}

export default Login
