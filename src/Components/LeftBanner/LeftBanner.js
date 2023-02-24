import React from 'react'
import styles from './LeftBanner.module.css';
const LeftBanner = () => {
    return (

        <div className={`${styles.container} ${styles.flexcolumn}`}>
            <div className={`${styles.topleftcontainer} ${styles.flexrow}`}>
                <p className={styles.heading}>Already have an account?</p>
                <button className={styles.login}> LOGIN</button>
            </div>
            <div className={styles.discover}>
                <h2 className={styles.bottomheading}> Discover new things on </h2>
                <h2 className={styles.bottomheading2}> Superapp</h2>
            </div>

        </div >
    )
}
export default LeftBanner;