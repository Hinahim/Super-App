import React from 'react'
import { useState, useEffect } from 'react';
import styles from './SignupForm.module.css';

const SignupForm = () => {
    const [formValues, setFormValues] = useState({ 'name': '', 'username': '', 'email': '', 'mobile': '' })
    const [isChecked, setIsChecked] = useState(false)
    const [active, setActive] = useState(false)
    const [nameValid, setNameValid] = useState(false)
    const [userNameValid, setUserNameValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const [mobileValid, setMobileValid] = useState(false)

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })

    }
    const handleCheck = (e) => {
        setIsChecked(e.target.checked)


    }
    const isFormSubmit = () => {
        for (const value in formValues) {
            if (formValues[value].length === 0) {
                return false
            }
        }
        return true
    }
    useEffect(() => {
        if (isChecked === true && formValues.name.length === 0) {
            setNameValid(true)
        }

        else {
            setNameValid(false)
        }
    }, [isChecked, formValues])
    useEffect(() => {
        if (isChecked === true && formValues.username.length === 0) {
            setUserNameValid(true)
        }

        else {
            setUserNameValid(false)
        }
    }, [isChecked, formValues])
    useEffect(() => {
        if (isChecked === true && formValues.email.length === 0) {
            setEmailValid(true)
        }

        else {
            setEmailValid(false)
        }
    }, [isChecked, formValues])
    useEffect(() => {
        if (isChecked === true && formValues.mobile.length === 0) {
            setMobileValid(true)
        }

        else {
            setMobileValid(false)
        }
    }, [isChecked, formValues])
    useEffect(() => {
        if (isChecked === true && isFormSubmit()) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    }, [formValues, isChecked])

    const handleClick = (e) => {
        setFormValues({ 'name': '', 'username': '', 'email': '', 'mobile': '' })
        setIsChecked(false)
    }

    return (
        <div className={`${styles.signupcontainer} ${styles.flexcolumn}`}>
            <p className={styles.superapp}> Super app</p>
            <p className={styles.account}> Create your new account</p>
            <div className={`${styles.flexrow} ${styles.justifycontent}`}>
                <p className={styles.email}> Email</p>
                <div className={styles.line}></div>
                <p className={styles.google}> Google</p>
            </div>
            <form className={`${styles.flexcolumn} ${styles.padding}`}>
                <input type="text" placeholder='Name' name='name' onChange={handleChange} />
                {nameValid ? <p className={styles.msg}>Please enter your name</p> : <></>}
                <input type="text" placeholder='UserName' name='username' onChange={handleChange} />
                {userNameValid ? <p className={styles.msg}>Please enter your username</p> : <></>}
                <input type="email" placeholder='Email' name='email' onChange={handleChange} />
                {emailValid ? <p className={styles.msg}>Please enter your email</p> : <></>}
                <input type="tel" placeholder="Mobile" name='mobile' maxlength="10" pattern="[0-9]{10}" title='ten digits code' required onChange={handleChange} />
                {mobileValid ? <p className={styles.msg}>Please enter your mobile number</p> : <></>}
                <div className={styles.flexrow}>
                    <input type="checkbox" id='c1' className={styles.tick} onChange={handleCheck} />
                    <label for="c1" className={styles.checkboxmsg}> Share my registration data with Superapp</label>
                </div>
                {active ? <button className={styles.register} onClick={handleClick}>SIGN UP</button> : <button disabled className={styles.register}>SIGN UP</button>}
            </form>
            <p className={styles.terms}> By clicking on Sign up. you agree to Superapp<span className={styles.conditions}> Terms and Conditions of Use</span> </p>
            <p className={styles.privacy}> To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className={styles.policy}> Privacy Policy</span> </p>

        </div>
    )
}
export default SignupForm;
