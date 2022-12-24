import React from "react";
import styles from "./header.module.css";
import PaeLayout from "../../components/PageLayout";

const Header = () => {
  const spoon = require("../../assets/spoon.png");
  const welcome = require("../../assets/welcome.png");
  return (
        <PaeLayout>
      <div className={styles.container}>
                
      <div className={styles.main}>
        <div className={styles.text}>
          <p>Chase the new Flavour</p>
          <img src={spoon} alt="spoon" />
        </div>
        <div className={styles.title}>
          <h1>The key to Fine dining</h1>
        </div>
        <div className={styles.paragraph}>
          <p>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
        </div>
        <div className={styles.button}>
            <p>Explore Menu</p>
        </div>
      </div>
      <div className={styles.image}>
        <img src={welcome} alt="welcome" />
      </div>
    </div>
    </PaeLayout>
  );
};

export default Header;

