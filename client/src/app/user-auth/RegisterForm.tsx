"use client"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "./RegisterForm.css";
import { registerUser } from '@/app/APICalls';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuthMode } from '../store/reducers/authSlice';
import { RootState } from '../store/store'
function RegisterForm() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleAuthMode());
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required !'),
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
        name: '',
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
                        <label className="label" htmlFor='name'>
                            Full Name
                        </label>
                        <Field className="field" id='name' name='name' placeholder="Please enter full name" />
                        <ErrorMessage name="name" component="div" className="error-message" />

                        <label className="label" htmlFor='email'>
                            Email
                        </label>
                        <Field className="field" id='email' name='email'  placeholder="Please enter email address"/>
                        <ErrorMessage name="email" component="div" className="error-message" />

                        <label className="label" htmlFor='password'>
                            Password
                        </label>
                        <Field className="field" id='password' name='password' type='password' placeholder="Please enter a strong password"/>
                        <ErrorMessage name="password" component="div" className="error-message" />

                        <div className='mt-8 flex justify-around flex-col sm:flex-row '>
                            <button type='submit' className="button mt-2" disabled={isSubmitting}>
                                {isSubmitting ? 'Registering...' : 'Register'}
                            </button>
                            <button className="button mt-2" onClick={handleClick}>
                                Already Registered? Log In
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>



        </>
    );
}

export default RegisterForm;
