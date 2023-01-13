import React from "react";
import styles from "./findUs.module.css";

const FindUs = () => {
  const spoon = require("../../assets/spoon.png");
  const findus = require("../../assets/findus.png");
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.contact}>
          <p>Contact</p>
          <img src={spoon} alt="spoon" />
        </div>

        <div className={styles.title}>
          <h3>Find Us</h3>
        </div>

        <div>
          <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        </div>

        <div className={styles.opening}>
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 10:00 am - 02:00 am</p>
          <p>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>

        <div className={styles.button}>Visit Us</div>
      </div>
      <div className={styles.image}>
        <img src={findus} alt="find us" />
      </div>
    </div>
  );
};

export default FindUs;
