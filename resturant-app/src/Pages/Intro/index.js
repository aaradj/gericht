import React from 'react';
import styles from "./intro.module.css";

const Intro = () => {
    const intro = require("../../assets/meal.mp4");
    return (
        <div className={styles.container}>
            <video width="100%" height="100%" controls  >
                <source src={intro} type="video/mp4" />
            </video>
        </div>
    );
};

export default Intro;