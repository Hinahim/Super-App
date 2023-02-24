import React from 'react'
import LeftBanner from '../../Components/LeftBanner/LeftBanner';
import SignupForm from '../../Components/SignupForm/SignupForm';
import styles from "./Signup.module.css";


const Signup = () => {
    return (
        <div className={styles.maincontainer}>
            <LeftBanner />
            <SignupForm />
        </div>
    )
}
export default Signup;
