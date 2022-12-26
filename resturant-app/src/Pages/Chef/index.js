import React from "react";
import styles from "./chef.module.css";

const Chef = () => {
  const spoon = require("../../assets/spoon.png");
  const chef = require("../../assets/chef.png");
  const sign = require("../../assets/sign.png");
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={chef} alt="chef" />
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.textTitle}>
            <p>Chef’s Word</p>
            <img src={spoon} alt="spoon" />
          </div>
          <h2>What we believe in</h2>
        </div>
        <div className={styles.text}>
          <p>
           <span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
            .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc."
          </p>
        </div>
        <div className={styles.chef}>
            <h3>Kevin Luo</h3>
            <h4>Chef & Founder</h4>
            <img src={sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
