import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const spoon = require("../../assets/spoon.png");
  return (
    <>
      <div className={styles.container} id="contact">
        <div className={styles.row}>
          <h3>Contact Us</h3>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>
        <div className={styles.main}>
          <h3>Gerícht</h3>
          <p>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={spoon} alt="spoon" />
        </div>
        <div className={styles.row}>
          <h3>Working Hours</h3>
          <div>
            <p>Monday-Friday:</p>
            <p>08:00 am -12:00 am</p>
          </div>
          <div>
            <p>Saturday-Sunday:</p>
            <p>07:00am -11:00 pm</p>
          </div>
        </div>
      </div>
      <footer>
        <p>2023 Gerícht. All Rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
