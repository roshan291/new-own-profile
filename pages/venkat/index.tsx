import React from 'react'
import VenkatSingleProfile from '../../common-components/venkat'
import styles from "../../styles/profile.module.scss";

const VenkatProfile = () => {
  return (
    <>
    {/* <div className={styles.selectTheme}>
        <ul>
            <li className={styles.whiteColor}></li>
            <li className={styles.blackColor}></li>
            <li className={styles.orangeColor}></li>
            <li className={styles.yellowColor}></li>
            <li className={styles.greenColor}></li>
        </ul>
    </div> */}
    <div className={styles.singeProfile}>
        <VenkatSingleProfile />
    </div>
    </>
  )
}

export default VenkatProfile