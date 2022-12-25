import React from "react";
import styles from "./aboutUs.module.css";

const AboutUs = () => {
  const spoon = require("../../assets/spoon.png");
  const knife = require("../../assets/knife.png");
  return (
    <div className={styles.container} id="about">
      <div className={styles.aboutUs}>
        <div className={styles.title}>
          <h2>About Us</h2>
          <img src={spoon} alt="spoon" />
        </div>
        <div className={styles.paragraph}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
        </div>
        <div className={styles.button}>
          <p>Know More</p>
        </div>
      </div>
      <div className={styles.image}>
        <img src={knife} alt="knife" className={styles.knife} />
      </div>
      <div className={styles.ourHistory}>
        <div className={styles.title}>
          <h2>Our History</h2>
          <img src={spoon} alt="spoon" />
        </div>
        <div className={styles.paragraph}>
          <p>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
        </div>
        <div className={styles.button}>
          <p>Know More</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
