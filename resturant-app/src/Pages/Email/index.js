import React, { useState } from "react";
import styles from "./email.module.css";
import PageLayout from "../../components/PageLayout";

const Email = () => {
  const [value, setValue] = useState("");
  const spoon = require("../../assets/spoon.png");
  const handleClick = () => {
    setValue("");
  };
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>Newsletter</p>
          <img src={spoon} alt="spoon" />
        </div>
        <div className={styles.title}>
          <h3>Subscribe to Our Newsletter</h3>
        </div>
        <div className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button type="submit" onClick={handleClick}>
            Subscribe
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Email;
