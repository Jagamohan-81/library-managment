"use client"
import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "./RegisterForm.css";
import { loginUser } from '../../store/reducers/authUserLoginSlice';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuthMode, setLoggedIn, checkUserExists } from '../../store/reducers/authSlice';
import { useRouter } from 'next/navigation'
import { RootState } from '@/app/store/store';

interface initialValueType {
    email: string | null,
    password: string | null
}
function LogInForm() {
    const router = useRouter()
    const dispatch = useDispatch();


    // Call checkUserExists when your component mounts
    useEffect(() => {
        dispatch(checkUserExists());
    }, [dispatch]);

    // Retrieve the loggedIn status from the store
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const handleClick = () => {
        dispatch(toggleAuthMode());
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email !').required('Email is required !'),
        password: Yup.string()
            .required('Password is required !')
            .min(8, 'Password must be at least 8 characters !')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must contain at one of, lowercase letter,uppercase letter,number,special character !'
            )
    });
    const initialValues = {
        email: '',
        password: '',
    };


    return (

        <>

            <Formik
                initialValues={initialValues}
                onSubmit={async (values: initialValueType, { setSubmitting }) => {
                    try {
                        setSubmitting(true);
                        const response: any = await dispatch(loginUser(values) as any);
                        if (response.payload.status == "OK") {
                            dispatch(setLoggedIn(true))
                            router.push('/')
                        }
                    } catch (error) {
                        console.log("err", error);
                    } finally {
                        setSubmitting(false);
                    }
                }}
                validationSchema={validationSchema}
            >
                {({ isSubmitting }: { isSubmitting: boolean }) => (
                    <Form className='form-container'>

                        <label className="label" htmlFor='email'>
                            Email
                        </label>
                        <Field className="field" id='email' name='email' placeholder="Please enter email address" />
                        <ErrorMessage name="email" component="div" className="error-message" />

                        <label className="label" htmlFor='password'>
                            Password
                        </label>
                        <Field className="field" id='password' name='password' type='password' placeholder="Please enter your password" />
                        <ErrorMessage name="password" component="div" className="error-message" />

                        <div className='mt-8 flex justify-around flex-col sm:flex-row '>
                            <button type='submit' className="button mt-2" disabled={isSubmitting}>
                                {isSubmitting ? 'Logging...' : 'Login'}
                            </button>
                            <button className="button mt-2" onClick={handleClick}>
                                New User ? Please Sign Up
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>

        </>
    );
}

export default LogInForm;
