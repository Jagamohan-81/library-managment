"use client"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "./LogInForm.css";
import { registerUser } from '@/app/APICalls';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuthMode } from '../store/reducers/authSlice';
function LogInForm() {
    const dispatch = useDispatch();
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
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        // Set isSubmitting to true to disable the submit button
                        setSubmitting(true);
                        const response = await registerUser(values);
                        alert(JSON.stringify(response.message))
                    } catch (error) {
                        console.log("err", error);
                    } finally {
                        // Set isSubmitting back to false to enable the submit button
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
